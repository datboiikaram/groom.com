import { useContext, useState } from "react";
import SmallImage from "./SmallImage";
import { DataContext } from "../../context/DataContext";

const PreviewImages = ({ images }) => {
  const { imageIndex, setImageIndex } = useContext(DataContext);
  const [isImagesOpen, setIsImagesOpen] = useState(false);
  const handleOpenImages = () => {
    setIsImagesOpen(!isImagesOpen);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="flex flex-col gap-2 items-center w-70 md:w-100 lg:w-110 h-fit  rounded-2xl">
      <img
        key={imageIndex}
        src={images[imageIndex]}
        className=" w-full h-90 md:h-125  rounded-2xl object-cover animate-fade-in "
        alt={`image number ${imageIndex}`}
        onClick={handleOpenImages}
      />

      <div className="flex w-full justify-between ">
        {images.map((src, index) => (
          <SmallImage src={src} index={index} key={index} />
        ))}
      </div>
      {isImagesOpen && (
        <div
          onClick={handleOpenImages}
          className="flex items-center justify-center z-2 bg-[rgba(0,0,0,0.9)] fixed top-0 right-0 bottom-0 left-0 pointer-events-auto touch-none"
        >
          <div className="flex items-center justify-center gap-2 md:gap-7 ">
            <button
              onClick={nextImage}
              className="flex items-center justify-center bg-white rounded-full p-3 h-10 md:h-16 w-10 md:w-16 hover:bg-[#c7c7c7] duration-200 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-10 rotate-[90deg] "
              >
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
              </svg>
            </button>
            <img
              onClick={(e) => e.stopPropagation()}
              src={images[imageIndex]}
              className="w-68 md:w-120 lg:w-150 rounded-2xl z-4"
              alt=""
            />
            <button
              onClick={prevImage}
              className="flex items-center justify-center bg-white rounded-full p-3 h-10 md:h-16 w-10 md:w-16 hover:bg-[#c7c7c7] duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-10 rotate-[-90deg] "
              >
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewImages;
