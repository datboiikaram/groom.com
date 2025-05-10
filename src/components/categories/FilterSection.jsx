import { useContext } from "react";
import FilterButton from "./FilterButton";
import PropertyButton from "./PropertyButton";
import { DataContext } from "../../context/DataContext";

const FilterSection = () => {
  const { isFilterMenuOpen, setIsFilterMenuOpen } = useContext(DataContext);
  const handleCloseMenu = () => {
    setIsFilterMenuOpen(false);
  };
  const preventClosing = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {!isFilterMenuOpen ? (
        <div className="font-Messiri hidden md:flex  bg-white   flex-col items-end    gap-4 px-8 py-2 w-fit ">
          <p className="text-2xl  md:text-3xl font-bold">: فلاتر التصفية</p>
          <div className="w-fit ">
            <FilterButton name={"السن"}>
              <PropertyButton radio={true} section={"age"} name={"تحت ٢٥"} />
              <PropertyButton radio={true} section={"age"} name={"٢٥ - ٣٠"} />
              <PropertyButton radio={true} section={"age"} name={"فوق ٣٠"} />
            </FilterButton>
            <FilterButton name={"الصفات الشخصية"}>
              <PropertyButton section={"personal"} name={"عنده شغل"} />
              <PropertyButton section={"personal"} name={"عنده شعر"} />
              <PropertyButton section={"personal"} name={"طويل"} />
              <PropertyButton section={"personal"} name={"ملتحي"} />
              <PropertyButton section={"personal"} name={"ملتزم"} />
              <PropertyButton section={"personal"} name={"عنده عربية"} />
              <PropertyButton section={"personal"} name={"بيطبخ"} />
              <PropertyButton section={"personal"} name={"بيكتب شعر"} />
            </FilterButton>
            <FilterButton name={"الاهتمامات"}>
              <PropertyButton section={"hobbies"} name={"رياضي"} />
              <PropertyButton section={"hobbies"} name={"مبرمج"} />
            </FilterButton>
            <FilterButton name={"الاستعداد للجواز"}>
              <PropertyButton
                radio={true}
                section={"ready"}
                name={"جاهز من بكرة"}
              />
              <PropertyButton
                radio={true}
                section={"ready"}
                name={"ظروفو علي قدو"}
              />
              <PropertyButton
                radio={true}
                section={"ready"}
                name={"متجوز اصلا"}
              />
            </FilterButton>
          </div>
        </div>
      ) : (
        <div
          onClick={handleCloseMenu}
          className="bg-[rgba(0,0,0,0.9)] fixed top-0 right-0 bottom-0 left-0 flex z-10 pointer-events-auto touch-none justify-end  "
        >
          <div
            onClick={preventClosing}
            className="font-Messiri  bg-white  animate-slide-in  flex flex-col items-end  pt-5  gap-4 px-8 py-2 w-fit "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-5 cursor-pointer self-start fill-[#c7c7c7] hover:fill-red-500 transition-all duration-300"
              onClick={handleCloseMenu}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <p className="text-2xl  md:text-3xl font-bold">: فلاتر التصفية</p>
            <div className="w-fit ">
              <FilterButton name={"السن"}>
                <PropertyButton radio={true} section={"age"} name={"تحت ٢٥"} />
                <PropertyButton radio={true} section={"age"} name={"٢٥ - ٣٠"} />
                <PropertyButton radio={true} section={"age"} name={"فوق ٣٠"} />
              </FilterButton>
              <FilterButton name={"الصفات الشخصية"}>
                <PropertyButton section={"personal"} name={"عنده شغل"} />
                <PropertyButton section={"personal"} name={"عنده شعر"} />
                <PropertyButton section={"personal"} name={"طويل"} />
                <PropertyButton section={"personal"} name={"ملتحي"} />
                <PropertyButton section={"personal"} name={"ملتزم"} />
                <PropertyButton section={"personal"} name={"عنده عربية"} />
                <PropertyButton section={"personal"} name={"بيطبخ"} />
                <PropertyButton section={"personal"} name={"بيكتب شعر"} />
              </FilterButton>
              <FilterButton name={"الاهتمامات"}>
                <PropertyButton section={"hobbies"} name={"رياضي"} />
                <PropertyButton section={"hobbies"} name={"مبرمج"} />
              </FilterButton>
              <FilterButton name={"الاستعداد للجواز"}>
                <PropertyButton
                  radio={true}
                  section={"ready"}
                  name={"جاهز من بكرة"}
                />
                <PropertyButton
                  radio={true}
                  section={"ready"}
                  name={"ظروفو علي قدو"}
                />
                <PropertyButton
                  radio={true}
                  section={"ready"}
                  name={"متجوز اصلا"}
                />
              </FilterButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSection;
