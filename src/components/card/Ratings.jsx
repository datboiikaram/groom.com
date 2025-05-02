import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { femaleAvatar, halfStarIcon, maleAvatar, starIcon } from "./icons";
const Rating = ({ ratings, testimonials }) => {
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
  const numberOfReviews = ratings.reduce((acc, curr) => acc + curr.number, 0);
  const numberOfStars = ratings.reduce(
    (acc, curr) => acc + curr.stars * curr.number,
    0
  );

  const fiveStarsPrecentage = Math.floor(
    (ratings[0].number / numberOfReviews) * 100
  );
  const fourStarsPrecentage = Math.floor(
    (ratings[1].number / numberOfReviews) * 100
  );
  const threeStarsPrecentage = Math.floor(
    (ratings[2].number / numberOfReviews) * 100
  );
  const twoStarsPrecentage = Math.floor(
    (ratings[3].number / numberOfReviews) * 100
  );
  const oneStarsPrecentage = Math.floor(
    (ratings[4].number / numberOfReviews) * 100
  );
  const isInteger = (num) => {
    return Number.isInteger(num);
  };

  const rate = numberOfStars / numberOfReviews;

  return (
    <div className=" w-full  font-Messiri flex flex-col gap-5 " dir="rtl">
      <p className="text-3xl font-bold">التقييمات والآراء</p>
      <div className="flex items-center  w-full gap-10 ">
        <div className="flex   border border-[#eee] p-3 rounded-2xl gap-3">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl text-[#c6c6c6]">
              <span className="text-8xl text-black">
                {toArabicNumber(rate.toFixed(1))}
              </span>
              \{toArabicNumber(5)}
            </p>
            <p className="text-[#c6c6c6]">
              ( {toArabicNumber(numberOfReviews)} تقييم )
            </p>
          </div>
          <div className="w-full flex flex-col items-end ">
            <div className="flex items-center justify-center gap-2 text-xl font-bold">
              {toArabicNumber(5)}
              {starIcon}{" "}
              <span
                className={`w-[220px] h-2 bg-[#eee]  relative overflow-hidden  rounded-2xl `}
              >
                <span
                  className="h-full bg-black transition-all duration-300  absolute rounded-2xl "
                  style={{ width: `${fiveStarsPrecentage}%` }}
                ></span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xl font-bold">
              {toArabicNumber(4)}
              {starIcon}{" "}
              <span
                className={`w-[220px] h-2 bg-[#eee]  relative overflow-hidden  rounded-2xl `}
              >
                <span
                  className="h-full bg-black transition-all duration-300  absolute rounded-2xl "
                  style={{ width: `${fourStarsPrecentage}%` }}
                ></span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xl font-bold">
              {toArabicNumber(3)}
              {starIcon}{" "}
              <span
                className={`w-[220px] h-2 bg-[#eee]  relative overflow-hidden  rounded-2xl `}
              >
                <span
                  className="h-full bg-black transition-all duration-300  absolute rounded-2xl "
                  style={{ width: `${threeStarsPrecentage}%` }}
                ></span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xl font-bold">
              {toArabicNumber(2)}
              {starIcon}{" "}
              <span
                className={`w-[220px] h-2 bg-[#eee]  relative overflow-hidden  rounded-2xl `}
              >
                <span
                  className="h-full bg-black transition-all duration-300  absolute rounded-2xl "
                  style={{ width: `${twoStarsPrecentage}%` }}
                ></span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xl font-bold">
              {toArabicNumber(1)}
              {starIcon}{" "}
              <span
                className={`w-[220px] h-2 bg-[#eee]  relative overflow-hidden  rounded-2xl `}
              >
                <span
                  className="h-full bg-black  transition-all duration-300 absolute rounded-2xl "
                  style={{ width: `${oneStarsPrecentage}%` }}
                ></span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-90 p-3 h-[166px]  border border-[#eee] rounded-2xl">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="pb-10  flex flex-col gap-2 p-2">
                  <div className="flex items-center justify-between w-full  ">
                    <div className="flex items-center  gap-2 ">
                      {item.gender === "male" ? maleAvatar : femaleAvatar}
                      <p className="font-bold">{item.relation}</p>
                    </div>
                    <div className="flex items-center   ">
                      {item.stars && isInteger(item.stars) ? (
                        Array.from({ length: item.stars }).map(() => starIcon)
                      ) : (
                        <>
                          {halfStarIcon}
                          {Array.from({ length: item.stars }).map(
                            () => starIcon
                          )}{" "}
                        </>
                      )}
                    </div>
                  </div>
                  <p>" {item.opinion} "</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Rating;
