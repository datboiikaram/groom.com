import { MockUpData } from "../../context/MockUpData";
import Card from "./Card";

const Related = () => {
  const groom1 = MockUpData[Math.floor(Math.random() * MockUpData.length)];
  const groom2 = MockUpData[Math.floor(Math.random() * MockUpData.length)];
  const groom3 = MockUpData[Math.floor(Math.random() * MockUpData.length)];
  const groom4 = MockUpData[Math.floor(Math.random() * MockUpData.length)];
  const relatedGrooms = [groom1, groom2, groom3, groom4];

  return (
    <div
      dir="rtl"
      className="flex flex-col items-center md:items-start gap-5 mb-10 font-Messiri w-full  "
    >
      <p className="text-lg md:text-3xl font-bold">خدلك بصة على باقي العرسان</p>
      <div className="grid auto-cols-max grid-flow-col  w-full snap-x snap-mandatory overflow-x-auto  gap-5  md:gap-5 lg:gap-8">
        {relatedGrooms.map((item, index) => (
          <Card {...item} item={item} index={item.id} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Related;
