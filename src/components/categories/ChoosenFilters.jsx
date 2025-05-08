import { useContext } from "react";
import Filter from "./Filter";
import { DataContext } from "../../context/DataContext";

const ChoosenFilters = () => {
  const { filterList } = useContext(DataContext);
  return (
    <div
      dir="rtl"
      className="flex gap-2 max-w-[350px]  justify-start md:gap-3 md:max-w-126 lg:max-w-214  flex-wrap "
    >
      {filterList &&
        filterList.map((item, index) => <Filter key={index} name={item} />)}
    </div>
  );
};

export default ChoosenFilters;
