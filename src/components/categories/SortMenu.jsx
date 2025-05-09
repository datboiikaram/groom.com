import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const SortMenu = () => {
  const { setSortBy, setIsFilterMenuOpen } = useContext(DataContext);
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const handleOpenFilterMenu = () => {
    setIsFilterMenuOpen(true);
  };
  return (
    <div className="flex items-center order-last md:order-first justify-between  w-full gap-3">
      <div
        dir="rtl"
        className="flex items-center w-full md:w-fit justify-center bg-[#eee] rounded-md "
      >
        <label htmlFor="sort" className="text-sm md:pr-2 md:text-base">
          ترتيب على حسب :
        </label>
        <select
          name="sort"
          dir="rtl"
          id="sort"
          className="p-2 appearance-none text-sm md:text-base rounded-md text-gray-700  focus:outline-none  bg-[#eee]"
          onClick={handleSortBy}
        >
          <option className="md:pl-5" value="age">
            السن
          </option>
          <option value="height">الطول</option>
          <option value="features">المزايا</option>
        </select>
        <svg
          className="w-5 fill-[#999]   hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
        </svg>
      </div>
      <div className="  md:hidden w-full  bg-[#eee] text-sm flex items-center justify-center h-full p-2 rounded-md">
        <label
          onClick={handleOpenFilterMenu}
          className="flex items-center justify-center gap-2 w-full"
          htmlFor="filter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 rotate-[180deg]"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
          الفلاتر
        </label>
        <input type="checkbox" id="filter" className="hidden" />
      </div>
    </div>
  );
};

export default SortMenu;
