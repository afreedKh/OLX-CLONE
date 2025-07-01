import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="mt-32">
      <header className="ml-24 mb-6">
        <h1 className="font-medium font-sans text-2xl">
          Fresh recommendations
        </h1>
      </header>
      <ProductItem />
    </div>
  );
};

export default ProductList;
