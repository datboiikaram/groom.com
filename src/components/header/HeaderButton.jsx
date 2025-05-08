import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const HeaderButton = ({ text, icon, handler, path, cart }) => {
  const { cartList } = useContext(DataContext);
  return (
    <Link
      to={path}
      onClick={handler}
      className="flex items-center justify-center gap-2 relative bg-violet-200 p-3 rounded-xl  cursor-pointer hover:bg-violet-300 duration-200 h-fit "
    >
      {text && (
        <p className="text-violet-800 font-semibold font-Messiri hidden md:block md:text-xs lg:text-base whitespace-nowrap ">
          {text}
        </p>
      )}
      {icon}
      {cart && cartList.length !== 0 && (
        <p className="absolute top-[-7%] right-[-7%] bg-red-600 text-xs flex items-center justify-center w-3 h-3 rounded-full p-2  text-white">
          {cartList.length}
        </p>
      )}
    </Link>
  );
};

export default HeaderButton;
