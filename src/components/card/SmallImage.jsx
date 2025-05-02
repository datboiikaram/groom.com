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
      className="h-25 w-25 rounded-md"
      src={src}
      alt={`image number ${index}`}
    />
  );
};

export default SmallImage;
