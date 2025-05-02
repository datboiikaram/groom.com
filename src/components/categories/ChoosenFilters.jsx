import { useContext } from "react";
import Filter from "./filter";
import { DataContext } from "../../context/DataContext";

const ChoosenFilters = () => {
  const { filterList } = useContext(DataContext);
  return (
    <div dir="rtl" className="flex gap-5 w-[868px]  flex-wrap ">
      {filterList &&
        filterList.map((item, index) => <Filter key={index} name={item} />)}
    </div>
  );
};

export default ChoosenFilters;
