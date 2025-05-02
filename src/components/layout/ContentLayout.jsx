import FilterSection from "../categories/FilterSection";
import CardsLayout from "./CardsLayout";

const ContentLayout = () => {
  return (
    <div className="  flex items-start justify-center mt-10 ">
      <CardsLayout />
      <FilterSection />
    </div>
  );
};

export default ContentLayout;
