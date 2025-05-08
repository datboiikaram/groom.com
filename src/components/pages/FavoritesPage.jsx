import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import FavoriteComponent from "../card/FavoriteComponent";
import { NoFavoritesImage } from "../card/icons";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favoritesList } = useContext(DataContext);
  return (
    <div dir="rtl" className=" w-fit font-Messiri flex flex-col gap-5 ">
      {favoritesList.length ? (
        <div dir="rtl" className=" w-full font-Messiri flex flex-col gap-5 ">
          <p className="text-2xl mr-2 md:mr-0 md:text-3xl lg:text-4xl font-bold ">
            فرسان الأحلام
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-2 gap-2 md:gap-5">
            {favoritesList?.map((item, index) => (
              <FavoriteComponent
                item={item}
                key={index}
                index={item?.id}
                image={item?.images[0]}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col font-Messiri font-bold items-center justify-center gap-7 ">
          {NoFavoritesImage}
          <p className=" text-center text-xl md:text-2xl lg:text-3xl text-[#c7c7c7]">
            واضح ان في فراغ عاطفي ومحدش مالي عينك
          </p>
          <Link
            to={"/"}
            className="border py-2 text-sm md:text-base px-3 rounded-3xl mt-5 text-violet-800 bg-violet-200 hover:bg-violet-300 duration-300"
          >
            بصي بصة كمان
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
