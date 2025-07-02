import type { FC } from "react";
import pageNotFound from "../../assets/pagenotfound.png";
import Login from "../../components/Login Modal/Login";
import { useLoginModal } from "../../context/LoginModal";

const PageNotFound:FC = () => {
  const { openModal } = useLoginModal();
  return (
    <div>
      <img src={pageNotFound} alt="Page not found illustration" />

      {openModal && <Login />}
    </div>
  );
};

export default PageNotFound;
