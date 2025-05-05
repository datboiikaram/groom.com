import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const Card = ({ name, tags, discount, price, images, index, item }) => {
  const { setImageIndex, setCartList, setFavoritesList, favoritesList } =
    useContext(DataContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoritesList.some((item) => item?.id === index));
  }, [favoritesList, index]);

  const toArabicNumber = (number) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => {
        return /\d/.test(digit) ? arabicNumbers[digit] : digit;
      })
      .join("");
  };
  const handleCardButtons = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const favoritesButtonHandler = (e) => {
    handleCardButtons(e);
  };
  const HandleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const addToCartHandler = (e) => {
    handleCardButtons(e);

    setCartList((prev) => (prev.includes(item) ? prev : [...prev, item]));
  };
  const addToFavoritesHandler = (e) => {
    handleCardButtons(e);
    setIsFavorite(!isFavorite);
    setFavoritesList((prev) => (prev.includes(item) ? prev : [...prev, item]));
  };
  const removeFavoritesHandler = (e) => {
    handleCardButtons(e);
    setIsFavorite(!isFavorite);
    setFavoritesList((prev) => prev.filter((item) => item.id !== index));
  };
  const ResetStates = () => {
    HandleScrollToTop();
    setImageIndex(0);
  };
  const newPrice = Math.ceil(price - (discount / 100) * price);
  return (
    <Link
      onClick={ResetStates}
      to={`/:${index}`}
      dir="ltr"
      className="flex flex-col relative font-Messiri shadow-sm w-fit rounded-2xl overflow-hidden  duration-200 "
    >
      <div>
        <img
          src={images.length ? images[0] : `https://placehold.co/260x260`}
          className="h-[260px] w-[260px]"
          alt=""
        />

        {tags && (
          <span className="bg-amber-200 p-2  text-amber-800 rounded-xl font-bold absolute top-[5%] left-[5%]">
            {tags}
          </span>
        )}

        <button
          onClick={favoritesButtonHandler}
          className="flex items-center justify-center absolute top-[6%] right-[3.5%] p-1 "
        >
          {isFavorite ? (
            <svg
              className="fill-red-500  w-6  hover:scale-[1.05]   duration-200 active:scale-[0.5]
 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={removeFavoritesHandler}
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          ) : (
            <svg
              className="fill-red-500  w-6  hover:scale-[1.05]  duration-200 active:scale-[0.5]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={addToFavoritesHandler}
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-col gap-3 p-3 items-end">
        <p className="text-2xl font-bold">{name}</p>
        <div className="flex items-center justify-between w-full">
          <button
            onClick={addToCartHandler}
            title="إضافة إلى سلة العرسان"
            className="p-2 bg-violet-200 w-fit h-fit rounded-xl hover:bg-violet-300 duration-200 "
          >
            <svg
              className="fill-violet-800 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" />
            </svg>
          </button>
          <div className="flex flex-col items-end">
            <p className="text-[#777777]">: السعر </p>
            <div className="flex items-center justify-center gap-2">
              {discount ? (
                <>
                  <p className="bg-red-200 text-red-600 py-0.5 px-1.5 rounded-xl">
                    {`-${toArabicNumber(discount)}٪`}
                  </p>
                  <p className="text-[#555] line-through">
                    {toArabicNumber(price)} ج.م
                  </p>
                  <p className="font-bold text-xl">
                    {toArabicNumber(newPrice)} ج.م
                  </p>
                </>
              ) : (
                <p className="font-bold text-xl">{toArabicNumber(price)} ج.م</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
