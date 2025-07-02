import { useParams } from "react-router-dom";
import Login from "../../components/Login Modal/Login";
import ProductDisplay from "../../components/Products/ProductDisplay";
import { useLoginModal } from "../../context/LoginModal";
import type { FC } from "react";

const ProductDetails:FC = () => {
  const { openModal } = useLoginModal();

  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Invalid product ID</div>;

  return (
    <div>
      <ProductDisplay id={id} />

      {openModal && <Login />}
    </div>
  );
};

export default ProductDetails;
