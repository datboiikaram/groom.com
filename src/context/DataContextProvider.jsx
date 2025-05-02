import { useState } from "react";
import { DataContext } from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [filterList, setFilterList] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [cartList, setCartList] = useState([]);

  return (
    <DataContext.Provider
      value={{
        filterList,
        setFilterList,
        imageIndex,
        setImageIndex,
        cartList,
        setCartList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
