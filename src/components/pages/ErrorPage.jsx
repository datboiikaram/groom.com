import { Link } from "react-router-dom";
import { errorImage } from "../card/icons";

const ErrorPage = () => {
  return (
    <div dir="rtl" className="flex items-center justify-center h-[100vh]">
      <div className="flex items-center justify-center font-Messiri gap-5">
        {errorImage}
        <div className="flex flex-col gap-3">
          <p className="font-bold text-4xl">أووبس !</p>
          <p className="text-2xl font-bold text-[#c5c5c5]">
            العريس اللي بتدور عليه مش هنا
          </p>
          <Link
            to={"/"}
            className="bg-black text-amber-50 py-1 px-3 w-fit rounded-full"
          >
            الرجوع للموقع
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
