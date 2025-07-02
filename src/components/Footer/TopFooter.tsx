import fb from "../../assets/facebook-svgrepo-com.svg";
import twitter from "../../assets/twitter-154-svgrepo-com.svg";
import insta from "../../assets/instagram-logo-facebook-2-svgrepo-com.svg";
import player from "../../assets/play-circle-svgrepo-com.svg";
import app_store from "../../assets/App-stpre.png";
import google_play from "../../assets/Google-pplay.png";

const TopFooter = () => {
  return (
    <div className="bg-[#f6f6f6] pb-9">
      <div className="grid grid-cols-5 ml-24 mt-20 ">
        <div className="popular-location mt-5">
          <h3 className="font-bold">POPULAR LOCATIONS</h3>
          <ul className="mt-2 font-extralight from-neutral-300">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div className="trending-location mt-5">
          <h3 className="font-bold">TRENDING LOCATIONS</h3>
          <ul className="mt-2 font-extralight from-neutral-300">
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>

        <div className="about-us mt-5">
          <h3 className="font-bold">ABOUT US</h3>
          <ul className="mt-2 font-extralight from-neutral-300">
            <li>Tech@OLX</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="olx mt-5">
          <h3 className="font-bold">OLX</h3>
          <ul className="mt-2 font-extralight from-neutral-300">
            <li>Blog</li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>
        <div className="follow-us mt-5 ">
          <h3 className="font-bold ml-1.5">FOLLOW US</h3>
          <ul className="mt-2 font-extralight from-neutral-300 flex items-center gap-2">
            <li>
              <img className="w-6 " src={fb} alt="fb-img" />
            </li>
            <li>
              <img className="w-6 mr-2" src={insta} alt="insta-img" />
            </li>
            <li>
              <img className="w-5 mr-2" src={twitter} alt="twitter-img" />
            </li>
            <li>
              <img className="w-5 " src={player} alt="player-img" />
            </li>
          </ul>

          <img className="w-40 mt-3 " src={google_play} alt="" />

          <img className="w-40" src={app_store} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
