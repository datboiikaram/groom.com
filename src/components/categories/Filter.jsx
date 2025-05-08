import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Filter = ({ name }) => {
  const { setFilterList } = useContext(DataContext);
  const deleteFilterHandler = () => {
    setFilterList((prev) => prev.filter((item) => item !== name));
  };
  return (
    <div className="overflow-hidden">
      <div
        dir="ltr"
        className="flex gap-2 animate-slide-in md:text-[15px] lg:text-base text-sm  rounded-md bg-gray-100 px-2 py-1"
      >
        <p className="text-gray-400">{name}</p>
        <svg
          onClick={deleteFilterHandler}
          className="w-3 lg:w-4 fill-[#b6b3b3] hover:fill-red-400 duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
    </div>
  );
};

export default Filter;
