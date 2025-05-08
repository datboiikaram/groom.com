import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const SmallImage = ({ src, index }) => {
  const { setImageIndex } = useContext(DataContext);
  const ChangeImage = () => {
    setImageIndex(index);
  };
  return (
    <img
      onClick={ChangeImage}
      className="h-16 w-16 md:h-22 md:w-22 lg:h-25 lg:w-25 rounded-md"
      src={src}
      alt={`image number ${index}`}
    />
  );
};

export default SmallImage;
