import { useContext } from "react";
import FeaturesBadge from "./FeaturesBadge";
import { DataContext } from "../../context/DataContext";

const GroomInfo = ({
  name,
  discount,
  price,
  content,
  tags,
  features,
  age,
  place,
  isMarried,
  romantic,
  height,
  item,
}) => {
  const { setCartList, setFavoritesList } = useContext(DataContext);

  const addToCartHandler = () => {
    setCartList((prev) => (prev.includes(item) ? prev : [...prev, item]));
  };
  const addToFavoritesHandler = () => {
    setFavoritesList((prev) => (prev.includes(item) ? prev : [...prev, item]));
  };
  const toArabicNumber = (number) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => {
        return /\d/.test(digit) ? arabicNumbers[digit] : digit;
      })
      .join("");
  };
  const favoritesIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="fill-violet-800 w-6"
    >
      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
    </svg>
  );
  const newPrice = Math.ceil(price - (discount / 100) * price);
  return (
    <div
      dir="rtl"
      className="w-fit font-Messiri flex flex-col self-start gap-3 "
    >
      {tags ? (
        <span className="bg-amber-200 p-2 w-fit  text-amber-800 rounded-xl font-bold ">
          {tags}
        </span>
      ) : (
        <span className="h-10"></span>
      )}
      <div className="flex flex-col gap-3">
        <p className="text-5xl font-bold">{name}</p>
        <div dir="ltr" className="flex flex-col items-end">
          <p className="text-[#777777] text-xl">: السعر </p>
          <div className="flex items-center justify-center gap-2 text-xl">
            {discount ? (
              <>
                <p className="bg-red-200 text-red-600 py-0.5 px-1.5 rounded-xl">
                  {`-${toArabicNumber(discount)}٪`}
                </p>
                <p className="text-[#555] line-through">
                  {toArabicNumber(price)} ج.م
                </p>
                <p className="font-bold text-xl">
                  {toArabicNumber(newPrice)} ج.م
                </p>
              </>
            ) : (
              <p className="font-bold text-xl">{toArabicNumber(price)} ج.م</p>
            )}
          </div>
        </div>
      </div>
      <div className="border border-[#eee] rounded-xl py-3 px-5 flex flex-col gap-2  ">
        <p className="font-bold text-xl">نبذة عن العريس</p>
        <p className="w-[600px]">{content}</p>
      </div>
      <div className="border border-[#eee] rounded-xl py-2 px-5 flex flex-col gap-1   ">
        <p className="font-bold text-xl">مميزات</p>
        <div className="flex gap-2 flex-wrap w-[600px]">
          {features.map((feature, index) => (
            <FeaturesBadge feature={feature} key={index} />
          ))}
        </div>
      </div>
      <div className="border border-[#eee] rounded-xl py-2 px-5 flex flex-col gap-1">
        <p className="font-bold text-xl">معلومات عن العريس</p>
        <div>
          <p>
            <span className="text-[17px] font-bold">السن : </span>
            <span>{toArabicNumber(age)} سنة</span>
          </p>
          <p>
            <span className="text-[17px] font-bold">الطول : </span>
            <span>{toArabicNumber(height)} سم</span>
          </p>
          <p>
            <span className="text-[17px] font-bold">محل الإقامة : </span>
            <span>{place} </span>
          </p>
          <p>
            <span className="text-[17px] font-bold">الحالة الاجتماعية : </span>
            <span>{isMarried ? "متجوز" : "أعزب"} </span>
          </p>
          <p>
            <span className="text-[17px] font-bold">الرومانسية : </span>
            <span>{romantic ? "رومانسي" : "جلخم"} </span>
          </p>
        </div>
      </div>
      <div className="w-full flex gap-2">
        <button
          onClick={addToCartHandler}
          className="text-violet-800 font-bold bg-violet-200 hover:bg-violet-300 duration-200 py-4 w-full rounded-xl "
        >
          إضافة إلى سلة العرسان
        </button>
        <button
          onClick={addToFavoritesHandler}
          className="bg-violet-200 hover:bg-violet-300 duration-200 p-4 rounded-xl"
        >
          {favoritesIcon}
        </button>
      </div>
    </div>
  );
};

export default GroomInfo;
