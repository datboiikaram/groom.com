import { useContext } from "react";
import FilterSection from "../categories/FilterSection";
import CardsLayout from "./CardsLayout";
import { DataContext } from "../../context/DataContext";
import NoSearchResult from "../../assets/no-search-result.png";
const ContentLayout = () => {
  const { searchQuery, searchedGrooms } = useContext(DataContext);
  return (
    <div className="  flex items-start justify-center md:mt-10 ">
      {searchQuery && searchedGrooms.length === 0 ? (
        <div className="flex flex-col font-Messiri items-center justify-center gap-5">
          <img src={`${NoSearchResult}`} className="w-80 md:w-full" alt="" />
          <p className=" text-2xl md:text-4xl font-bold text-[#c7c7c7]">
            للأسف عريسك مش موجود
          </p>
        </div>
      ) : (
        <>
          {" "}
          <CardsLayout />
          <FilterSection />
        </>
      )}
    </div>
  );
};

export default ContentLayout;
