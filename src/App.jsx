import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

import DataContextProvider from "./context/DataContextProvider";
import HeroAnimation from "./components/card/HeroAnimation";

function App() {
  return (
    <div className="w-full  flex flex-col items-center justify-center m-0 p-0">
      <div className="w-full flex flex-col  items-center justify-center gap-10 mb-10 overflow-hidden ">
        <DataContextProvider>
          <HeroAnimation />
          <Header />
          <Outlet />
        </DataContextProvider>
      </div>
    </div>
  );
}

export default App;
