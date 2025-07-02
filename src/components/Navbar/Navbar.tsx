import logo from "../../assets/olx_logo_2025.svg";
import search from "../../assets/search.svg";
import arrow from "../../assets/arrow-down-339-svgrepo-com.svg";
import heart from "../../assets/heart-svgrepo-com.svg";
import sellBtn from "../../assets/addButton.png";
import { useNavigate } from "react-router-dom";
import { useLoginModal } from "../../context/LoginModal";
import { userAuth } from "../../context/Auth";
import avatar from "../../assets/avatar_4.png";
import { Toastify } from "../Toastify/Toastify";

const Navbar = () => {
  const { toggleModal } = useLoginModal();
  const navigate = useNavigate();
  const authContext = userAuth();
  const user = authContext?.user;
  const logout = authContext?.logout;

  async function handleLogout() {
    await logout?.();
    navigate("/");
    Toastify("Logout Successfully");
  }

  return (
    <div className="bg-white shadow-[0_1px_4px_0_#0000001a]">
      <nav className="flex items-center w-full h-[72px] bg-[#002f3408] px-2 md:px-4">
        <div className="logo w-12 md:w-20 flex items-center h-16">
          <img
            src={logo}
            alt="logo_img"
            className="w-10 md:w-14 m-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="location hidden md:flex items-center justify-between relative h-16 w-48 lg:w-72 mr-2">
          <img
            src={search}
            alt="search_img"
            className="w-4 absolute left-3 z-10"
          />
          <input
            type="text"
            className="h-12 w-full pl-10 pr-8 border border-gray-300 rounded outline-none focus:border-blue-500"
            placeholder="Location"
          />
          <img src={arrow} alt="" className="w-6 absolute right-2 z-10" />
        </div>

        <div className="search flex justify-center items-center flex-1 max-w-2xl mx-2">
          <input
            type="text"
            className="w-full h-12 px-4 border border-gray-300 rounded-l outline-none focus:border-blue-500"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <button className="h-12 w-12 md:w-14 bg-black flex items-center justify-center cursor-pointer rounded-r">
            <svg
              fill="#ffffff"
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488.4 488.4"
              stroke="#ffffff"
              strokeWidth="25.3968"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>

        <div className="language hidden lg:flex justify-center items-center ml-3 mr-3">
          <span className="font-bold text-[14px] mr-2">ENGLISH</span>
          <img src={arrow} alt="" className="w-6" />
        </div>

        <div className="heart hidden md:block mr-4">
          <img src={heart} alt="" className="w-6" />
        </div>

        {!user ? (
          <div
            onClick={toggleModal}
            className="login hidden sm:flex items-center justify-center mr-3 cursor-pointer"
          >
            <p className="font-bold text-[14px] md:text-[16px] underline ">
              Login
            </p>
          </div>
        ) : (
          <div className="relative group mr-3">
            <img
              src={avatar}
              alt="user avatar"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
            />
            <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        <div className="sell flex items-center justify-center">
          <img
            onClick={user ? () => navigate({ pathname: "/post" }) : toggleModal}
            src={sellBtn}
            alt=""
            className="w-20 md:w-26 cursor-pointer shadow-[0_2px_4px_-1px_#0003,_0_1px_10px_0_#0000001f,_0_4px_5px_0_#00000024] rounded-[30px]"
          />
        </div>
      </nav>

      <div className="md:hidden bg-white border-t border-gray-200 px-2 py-2">
        <div className="flex items-center">
          <img src={search} alt="search_img" className="w-4 mr-2" />
          <input
            type="text"
            className="flex-1 h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-sm"
            placeholder="Location"
          />
          <img src={arrow} alt="" className="w-5 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
