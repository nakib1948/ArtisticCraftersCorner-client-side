import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#F3E0DC]">
      <NavBar></NavBar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
