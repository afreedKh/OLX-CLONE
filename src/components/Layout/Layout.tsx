import { Outlet, useLocation } from "react-router-dom";
import { useLoginModal } from "../../context/LoginModal";
import CategoryBar from "../CategoryBar/CategoryBar";
import BottomFooter from "../Footer/BottomFooter";
import TopFooter from "../Footer/TopFooter";
import Login from "../Login Modal/Login";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  const { openModal } = useLoginModal();
  const location = useLocation();

  const hidingRoutes = ["/post"];
  const showExtras = !hidingRoutes.includes(location.pathname);

  return (
    <>
      {showExtras && <Navbar />}
      {showExtras && <CategoryBar />}
      <Outlet />
      {showExtras && <TopFooter />}
      <BottomFooter />
      {openModal && <Login />}
    </>
  );
};

export default Layout;
