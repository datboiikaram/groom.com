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
              <PropertyButton section={"age"} name={"تحت ٢٥"} />
              <PropertyButton section={"age"} name={"٢٥ - ٣٠"} />
              <PropertyButton section={"age"} name={"فوق ٣٠"} />
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
              <PropertyButton section={"ready"} name={"جاهز من بكرة"} />
              <PropertyButton section={"ready"} name={"ظروفو علي قدو"} />
              <PropertyButton section={"ready"} name={"متجوز اصلا"} />
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
            className="font-Messiri  bg-white    flex flex-col items-end  pt-5  gap-4 px-8 py-2 w-fit "
          >
            <p
              className="font-sans font-bold text-lg self-start"
              onClick={handleCloseMenu}
            >
              X
            </p>
            <p className="text-2xl  md:text-3xl font-bold">: فلاتر التصفية</p>
            <div className="w-fit ">
              <FilterButton name={"السن"}>
                <PropertyButton section={"age"} name={"تحت ٢٥"} />
                <PropertyButton section={"age"} name={"٢٥ - ٣٠"} />
                <PropertyButton section={"age"} name={"فوق ٣٠"} />
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
                <PropertyButton section={"ready"} name={"جاهز من بكرة"} />
                <PropertyButton section={"ready"} name={"ظروفو علي قدو"} />
                <PropertyButton section={"ready"} name={"متجوز اصلا"} />
              </FilterButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSection;
