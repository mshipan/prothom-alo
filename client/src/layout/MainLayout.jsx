import HeaderTop from "../components/shared/HeaderTop";
import HeaderMenu from "../components/shared/HeaderMenu";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-full px-4 lg:px-6 xl:px-8 2xl:px-10 mx-auto bg-slate-50">
      <HeaderTop />
      <HeaderMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
