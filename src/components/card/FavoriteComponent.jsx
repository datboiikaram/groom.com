import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const FavoriteComponent = ({ item, index, image }) => {
  const { setFavoritesList, setCartList } = useContext(DataContext);
  const removeFavoritesHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setFavoritesList((prev) => prev.filter((item) => item?.id !== index));
  };
  const addToCartHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setCartList((prev) => (prev.includes(item) ? prev : [...prev, item]));
  };
  return (
    <Link
      to={`/:${index}`}
      className="w-fit flex flex-col items-center border border-[#eee]/30 gap-2 shadow-md p-3 rounded-2xl"
    >
      <img
        src={`${image}`}
        className="w-45 object-cover h-50 rounded-xl"
        alt="person image"
      />
      <p className="w-fit text-sm md:text-xl font-bold">{item?.name}</p>
      <div className="flex items-center justify-center w-full gap-2 ">
        <button
          title="إزالة من فرسان الأحلام"
          onClick={removeFavoritesHandler}
          className="border-2 border-red-500 bg-red-200 hover:bg-red-300 duration-250  p-1 rounded-md "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 md:w-6 fill-red-500"
          >
            <path d="M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1l0 5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9l0-5.8c0-69.9 50.5-129.5 119.4-141z" />
          </svg>
        </button>
        <button
          title="إضافة إلى سلة العرسان"
          onClick={addToCartHandler}
          className=" bg-violet-200 hover:bg-violet-300 text-violet-800 font-bold border-2 py-1 w-full text-sm md:text-base rounded-md duration-250 "
        >
          حجز
        </button>
      </div>
    </Link>
  );
};

export default FavoriteComponent;
