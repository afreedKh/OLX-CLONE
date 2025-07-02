import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { fetchFromFirestore } from "../../Firebase/Firebase";
import { useEffect, useState } from "react";
import type { Product } from "../../Types/Product";
import spinner from "../../assets/load-32_256.gif";

export default function ProductItem() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoding] = useState<boolean>(false);

  useEffect(() => {
    setLoding(true);
    const fetchData = async () => {
      const data = await fetchFromFirestore();

      setProductList(data);
      setLoding(false);
    };
    fetchData();
  }, []);

  return loading ? (
    <div className="login-spinner w-full h-screen flex items-center justify-center">
      <img src={spinner} alt="" className="w-14" />
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 px-4 sm:px-12 ml-12 ">
      {productList.map((product) => (
        <Link to={`/product-details/${product.id}`} key={product.id}>
          <Card
            key={product.id}
            sx={{ maxWidth: 330, padding: 1, outline: 1, position: "relative" }}
          >
            <CardMedia
              sx={{ height: 180 }}
              image={product.image}
              title={product.title}
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={600}
              >
                {product.price}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.title}
              </Typography>
              <div className="flex justify-between text-sm text-gray-500 pt-2">
                <span>{product.location}</span>
                <span>Today</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
