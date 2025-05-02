import FilterButton from "./FilterButton";
import PropertyButton from "./PropertyButton";

const FilterSection = () => {
  return (
    <div className="font-Messiri  flex flex-col items-end  gap-4 px-8 py-2 w-fit ">
      <p className="text-3xl font-bold">: فلاتر التصفية</p>
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
  );
};

export default FilterSection;
