import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

import DataContextProvider from "./context/DataContextProvider";

function App() {
  return (
    <div className="w-full  flex flex-col items-center justify-center m-0 p-0">
      <div className="w-fit items-center justify-center">
        <DataContextProvider>
          <Header />
          <Outlet />
        </DataContextProvider>
      </div>
    </div>
  );
}

export default App;
