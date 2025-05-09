import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(DataContext);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    navigate("/");
  };

  return (
    <div className="flex items-center  h-fit justify-center gap-1 py-1 px-3 bg-gray-100 hover:bg-gray-200 duration-200 w-fit rounded-xl ">
      <input
        id="search"
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="font-Messiri p-2 rounded-xl outline-0 md:text-sm "
        placeholder="البحث عن ابن الحلال"
        dir="rtl"
      />
      <label htmlFor="search">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          zoomAndPan="magnify"
          viewBox="0 0 112.5 112.499997"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          className="w-6"
        >
          <defs>
            <clipPath id="3b28189a48">
              <path
                d="M 0 0 L 111.253906 0 L 111.253906 111.253906 L 0 111.253906 Z M 0 0 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="40857f8f5b">
              <path
                d="M 6.675781 69.324219 L 9.316406 69.324219 L 9.316406 72.605469 L 6.675781 72.605469 Z M 6.675781 69.324219 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="35988c63df">
              <path
                d="M 8.8125 70.039062 C 9.257812 72.054688 8.886719 72.503906 8.585938 72.503906 C 8.214844 72.578125 7.167969 71.832031 7.09375 71.457031 C 7.019531 71.160156 7.316406 70.636719 7.617188 70.488281 C 7.914062 70.335938 8.660156 70.335938 8.960938 70.636719 C 9.257812 70.859375 9.332031 71.605469 9.257812 71.980469 C 9.109375 72.277344 8.660156 72.652344 8.363281 72.578125 C 7.914062 72.503906 6.792969 71.382812 6.71875 70.785156 C 6.644531 70.335938 6.945312 69.515625 7.316406 69.367188 C 7.617188 69.21875 8.8125 70.039062 8.8125 70.039062 "
                clipRule="nonzero"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#3b28189a48)">
            <path
              fill="#737373"
              d="M 53.367188 0 C 23.894531 0 0 23.367188 0 52.1875 C 0 81.011719 23.894531 104.375 53.367188 104.375 C 65.972656 104.375 77.558594 100.101562 86.691406 92.957031 L 104.035156 109.875 L 104.496094 110.261719 C 106.109375 111.429688 108.390625 111.296875 109.847656 109.867188 C 111.449219 108.296875 111.449219 105.75 109.839844 104.183594 L 92.699219 87.464844 C 101.414062 78.175781 106.734375 65.789062 106.734375 52.1875 C 106.734375 23.367188 82.839844 0 53.367188 0 Z M 53.367188 8.039062 C 78.300781 8.039062 98.515625 27.804688 98.515625 52.1875 C 98.515625 76.570312 78.300781 96.339844 53.367188 96.339844 C 28.433594 96.339844 8.21875 76.570312 8.21875 52.1875 C 8.21875 27.804688 28.433594 8.039062 53.367188 8.039062 Z M 53.367188 8.039062 "
              fillOpacity="1"
              fillRule="evenodd"
            />
          </g>
          <g clipPath="url(#40857f8f5b)">
            <g clipPath="url(#35988c63df)">
              <path
                fill="#737373"
                d="M 3.734375 66.378906 L 12.394531 66.378906 L 12.394531 75.550781 L 3.734375 75.550781 Z M 3.734375 66.378906 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
          </g>
        </svg>
      </label>
    </div>
  );
};

export default SearchBar;
