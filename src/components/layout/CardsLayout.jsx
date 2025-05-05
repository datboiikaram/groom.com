import { useContext } from "react";

import Card from "../card/Card";
import SortSection from "../categories/SortSection";
import { DataContext } from "../../context/DataContext";

const CardsLayout = () => {
  const { searchedGrooms } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col justify-center items-end">
        <SortSection />
        <div dir="rtl" className="grid grid-cols-3 w-fit gap-11">
          {searchedGrooms.map((item, index) => (
            <Card {...item} item={item} index={item.id} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsLayout;
