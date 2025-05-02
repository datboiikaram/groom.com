import { useContext } from "react";
import SmallImage from "./SmallImage";
import { DataContext } from "../../context/DataContext";

const PreviewImages = ({ images }) => {
  const { imageIndex } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-2 items-center w-[450px] h-fit  rounded-2xl">
      <img
        key={imageIndex}
        src={images[imageIndex]}
        className=" w-full h-[535px] rounded-2xl animate-fade-in "
        alt={`image number ${imageIndex}`}
      />

      <div className="flex w-full justify-between ">
        {images.map((src, index) => (
          <SmallImage src={src} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreviewImages;
