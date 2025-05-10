import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const PropertyButton = ({ name, section, radio }) => {
  const { filterList, setFilterList } = useContext(DataContext);
  // const handleChecked = (e) => {
  //   const value = e.target.value;
  //   if (radio) {
  //     setFilterList((prev) => {
  //       const filtered = prev.filter((item) => {
  //         return item.section === section;
  //       });
  //     });
  //   }
  //   if (e.target.checked) {
  //     setFilterList((prev) =>
  //       prev?.includes(value) ? prev : [...prev, value]
  //     );
  //   } else {
  //     setFilterList((prev) => prev.filter((item) => item !== value));
  //   }
  // };

  const handleChecked = (e) => {
    const value = e.target.value;

    if (radio) {
      setFilterList((prev) => {
        const filtered = prev.filter((item) => {
          const itemSection = document.querySelector(
            `input[value="${item}"]`
          )?.name;

          return itemSection !== section;
        });

        return e.target.checked ? [...filtered, value] : filtered;
      });
    } else {
      if (e.target.checked) {
        setFilterList((prev) =>
          prev?.includes(value) ? prev : [...prev, value]
        );
      } else {
        setFilterList((prev) => prev.filter((item) => item !== value));
      }
    }
  };

  return (
    <li className="flex  items-center justify-end font-normal hover:bg-[#eee] duration-200 p-1 rounded-[7px] text-lg lg:text-xl gap-2">
      <label className="w-full text-end" htmlFor={name}>
        {name}
      </label>
      <input
        checked={filterList.includes(name)}
        value={name}
        onChange={handleChecked}
        name={section}
        id={name}
        type={radio ? "radio" : "checkbox"}
        className=" accent-violet-700 cursor-pointer "
      />
    </li>
  );
};

export default PropertyButton;
