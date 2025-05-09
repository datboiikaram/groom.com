import { useParams } from "react-router-dom";
import PreviewImages from "./PreviewImages";
import { MockUpData } from "../../context/MockUpData";
import GroomInfo from "./GroomInfo";
import Rating from "./Ratings";
import Related from "./Related";

const CardPage = () => {
  const { cardId } = useParams();
  const index = cardId?.split(":")[1];
  const groom = MockUpData[index];
  const groomImages = groom?.images;

  return (
    <div className=" flex flex-col w-full  items-center justify-center gap-5 md:mt-8 ">
      <div
        dir="rtl"
        className=" flex flex-col md:w-full md:flex-row items-center justify-center gap-8 md:gap-5"
      >
        <PreviewImages images={groomImages} />
        <GroomInfo {...groom} index={groom?.id} item={groom} />
      </div>
      <div className="flex flex-col gap-5 items-center lg:items-end justify-center w-full lg:w-fit ">
        <Rating {...groom} />
        <Related />
      </div>
    </div>
  );
};

export default CardPage;
