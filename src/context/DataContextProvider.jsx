import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { MockUpData } from "./MockUpData";

const DataContextProvider = ({ children }) => {
  const [filterList, setFilterList] = useState([]);

  const [sortBy, setSortBy] = useState("age");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
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
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : "";
  });
  useEffect(() => {
    saveToDB("cart", cartList);
  }, [cartList]);
  useEffect(() => {
    saveToDB("favorites", favoritesList);
  }, [favoritesList]);
  useEffect(() => {
    saveToDB("user", userInfo);
  }, [userInfo]);

  const sortedGrooms = () => {
    const groomsCopy = [...MockUpData];
    switch (sortBy) {
      case "age":
        return groomsCopy.sort((a, b) => b.age - a.age);
      case "height":
        return groomsCopy.sort((a, b) => b.height - a.height);
      case "features":
        return groomsCopy.sort((a, b) => b.filters.length - a.filters.length);
    }
  };

  const filteredGrooms = sortedGrooms().filter((groom) => {
    return groom.filters.some((item) => filterList.includes(item));
  });

  const searchedGrooms =
    filteredGrooms.length === 0
      ? sortedGrooms().filter((groom) => {
          return groom.name.includes(searchQuery);
        })
      : filteredGrooms.filter((groom) => {
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
        setSortBy,
        searchedGrooms,
        isFilterMenuOpen,
        setIsFilterMenuOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
