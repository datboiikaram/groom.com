import { useState } from "react";

const FilterButton = ({ name, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const openOptionsHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex flex-col w-full  ">
      <label
        onClick={openOptionsHandler}
        htmlFor={name}
        className="flex text-2xl font-semibold justify-between  w-full hover:bg-[#eee] rounded-xl duration-200 p-2 gap-10"
      >
        <svg
          className={`w-4 fill-[#777] transition-all duration-150 ${
            isChecked ? "rotate-0" : "rotate-[-180deg]"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
        <span>{name}</span>
      </label>
      <input className="hidden" type="checkbox" id={name} />

      <div
        className={`   ${
          isChecked ? "inline-block" : "hidden"
        } duration-300 ease-in-out transition-all`}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterButton;
