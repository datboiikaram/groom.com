import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const CartComponent = ({
  images,
  name,
  readyToMarryNote,
  hasHouseNote,
  price,
  discount,
  index,
}) => {
  const { setCartList } = useContext(DataContext);

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
  const deleteFromCartHandler = (e) => {
    e.preventDefault();
    setCartList((prev) => prev.filter((item) => item?.id !== index));
  };
  const newPrice = Math.ceil(price - (discount / 100) * price);
  return (
    <Link
      to={`/:${index}`}
      dir="rtl"
      className="flex items-center  border-b w-full justify-between md:w-175 gap-3  border-[#eee] p-3  "
    >
      <div className="flex gap-2 items-center">
        <div className="flex items-center  gap-3   ">
          <img
            className="w-17 md:w-20 h-17  object-cover  md:h-20
       rounded-md md:rounded-xl"
            src={`${images[0]}`}
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row items-start ">
          <p className="font-bold text-sm md:text-base  md:w-45">{name}</p>

          <p className="text-center text-xs md:text-base   md:w-40">
            {readyToMarryNote}
          </p>
          <p className="text-center text-xs md:text-base  md:w-30">
            {hasHouseNote}
          </p>
          <p className="text-center text-xs md:text-base  md:w-20">
            {toArabicNumber(newPrice)} ج.م.{" "}
          </p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-3 md:w-4 mr-4 fill-[#ccc] hover:fill-red-400 duration-200 "
        onClick={deleteFromCartHandler}
      >
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    </Link>
  );
};

export default CartComponent;
