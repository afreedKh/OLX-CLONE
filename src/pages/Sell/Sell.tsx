import type { FC } from "react";
import PostNavbar from "../../components/Navbar/PostNavbar";
import Post from "../../components/Products/Post";

const Sell:FC = () => {
  return (
    <div>
      <PostNavbar />
      <Post />
    </div>
  );
};

export default Sell;
