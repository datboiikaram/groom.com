import CategoryTitle from "./CategoryTitle";
import ChoosenFilters from "./ChoosenFilters";
import SortMenu from "./SortMenu";

const SortSection = () => {
  return (
    <div className=" flex flex-col font-Messiri w-full mb-5 gap-3 md:gap-5 items-end ">
      <div className="flex flex-col md:flex-row items-end  md:items-center w-full justify-between gap-3">
        <SortMenu />
        <CategoryTitle title={"العرسان"} />
      </div>
      <ChoosenFilters />
    </div>
  );
};

export default SortSection;
