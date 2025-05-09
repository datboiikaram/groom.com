import { useContext } from "react";
import NoFilterResult from "../../assets/no-filter-image.png";
import Card from "../card/Card";
import SortSection from "../categories/SortSection";
import { DataContext } from "../../context/DataContext";

const CardsLayout = () => {
  const { searchedGrooms } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col justify-center items-end ">
        <SortSection />

        {searchedGrooms.length !== 0 ? (
          <div
            dir="rtl"
            className="grid grid-cols-2 lg:grid-cols-3 w-full gap-3 md:gap-6 p-2 lg:gap-11"
          >
            {searchedGrooms.map((item, index) => (
              <Card {...item} item={item} index={item.id} key={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col font-Messiri items-center justify-center gap-5 max-w-93 md:max-w-128  lg:max-w-221 lg:w-221">
            <img
              src={`${NoFilterResult}`}
              className="max-w-full  md:max-w-lg lg:max-w-xl p-4"
              alt=""
            />
            <p className=" text-2xl md:text-4xl font-bold text-[#c7c7c7]">
              مفيش حد كده
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CardsLayout;
