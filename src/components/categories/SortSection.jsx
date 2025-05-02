import CategoryTitle from "./CategoryTitle";
import ChoosenFilters from "./ChoosenFilters";
import SortMenu from "./SortMenu";

const SortSection = () => {
  return (
    <div className="flex flex-col font-Messiri w-full mb-5 gap-5 ">
      <div className="flex w-full justify-between">
        <SortMenu />
        <CategoryTitle title={"العرسان"} />
      </div>
      <ChoosenFilters />
    </div>
  );
};

export default SortSection;
