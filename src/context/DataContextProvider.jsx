import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { MockUpData } from "./MockUpData";

const DataContextProvider = ({ children }) => {
  const [filterList, setFilterList] = useState([]);
  const [userInfo, setUserInfo] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [cartList, setCartList] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [favoritesList, setFavoritesList] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const saveToDB = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getFromDB = (key) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : "";
  };
  useEffect(() => {
    saveToDB("cart", cartList);
  }, [cartList]);
  useEffect(() => {
    saveToDB("favorites", favoritesList);
  }, [favoritesList]);
  const searchedGrooms = MockUpData.filter((groom) => {
    return groom.name.includes(searchQuery);
  });
  return (
    <DataContext.Provider
      value={{
        filterList,
        setFilterList,
        imageIndex,
        setImageIndex,
        cartList,
        setCartList,
        saveToDB,
        favoritesList,
        setFavoritesList,
        userInfo,
        setUserInfo,
        getFromDB,
        searchQuery,
        setSearchQuery,

        searchedGrooms,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
