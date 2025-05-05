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
    <div className=" flex flex-col w-fit items-center justify-center gap-5 mt-8">
      <div dir="rtl" className=" flex items-center justify-center gap-8">
        <PreviewImages images={groomImages} />
        <GroomInfo {...groom} index={groom?.id} item={groom} />
      </div>

      <Rating {...groom} />
      <Related />
    </div>
  );
};

export default CardPage;
