import { useParams } from "react-router-dom";
import Login from "../../components/Login Modal/Login";
import ProductDisplay from "../../components/Products/ProductDisplay";
import { useLoginModal } from "../../context/LoginModal";

const ProductDetails = () => {
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
