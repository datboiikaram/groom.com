import { MockUpData } from "../../context/MockUpData";
import Card from "../card/Card";
import SortSection from "../categories/SortSection";

const CardsLayout = () => {
  // MockUpData.map((item) =>
  //   item.features.map((feature) => console.log(feature))
  // );
  return (
    <div className="flex flex-col justify-center items-end">
      <SortSection />
      <div dir="rtl" className="grid grid-cols-3 w-fit gap-11">
        {MockUpData.map((item, index) => (
          <Card {...item} item={item} index={item.id} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardsLayout;
