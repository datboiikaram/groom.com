import { Link } from "react-router-dom";

const HeaderButton = ({ text, icon, handler, path }) => {
  return (
    <Link
      to={path}
      onClick={handler}
      className="flex items-center justify-center gap-2 bg-violet-200 p-3 rounded-xl cursor-pointer hover:bg-violet-300 duration-200 h-fit "
    >
      {text && (
        <p className="text-violet-800 font-semibold font-Messiri ">{text}</p>
      )}
      {icon}
    </Link>
  );
};

export default HeaderButton;
