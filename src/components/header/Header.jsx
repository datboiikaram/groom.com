import { useContext } from "react";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";
import { DataContext } from "../../context/DataContext";

const favoritesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="fill-violet-800 w-5"
  >
    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
  </svg>
);
const groomIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="fill-violet-800 w-5"
  >
    <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" />
  </svg>
);

const Header = () => {
  const { getFromDB } = useContext(DataContext);

  const userInfo = getFromDB("user");

  return (
    <div className="flex flex-col md:flex-row items-center   gap-5 justify-between w-full lg:max-w-274 lg:gap-30  p-2">
      <SearchBar />

      <div className="flex gap-5  lg:gap-30 order-first items-center justify-between md:justify-center w-full md:order-last ">
        <Logo />
        <div className="flex items-center gap-2 md:gap-5 ">
          <HeaderButton
            path="/favorites"
            text="فرسان الأحلام"
            icon={favoritesIcon}
          />

          <HeaderButton
            cart={true}
            path="/cart"
            text="سلة العرسان"
            icon={groomIcon}
          />
          <UserAvatar avatar={userInfo.picture} name={userInfo.name} />
        </div>
      </div>
    </div>
  );
};

export default Header;
