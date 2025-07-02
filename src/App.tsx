import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sell from "./pages/Sell/Sell";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { FC } from "react";

const App:FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Sell />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
