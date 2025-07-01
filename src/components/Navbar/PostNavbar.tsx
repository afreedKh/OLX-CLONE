import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow-left.png";

const PostNavbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-full h-20 bg-[#002f3408] shadow flex items-center justify-baseline ">
        <img onClick={()=>navigate(-1)} className="w-7 ml-7 cursor-pointer" src={arrow} alt="" />
      </div>
      
    </div>
  );
};

export default PostNavbar;
