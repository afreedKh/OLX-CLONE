import { useState } from "react";
import { firestore } from "../../Firebase/Firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Toastify } from "../Toastify/Toastify";

interface ProductTypes {
  title: string;
  category: string;
  price: number;
  description: string;
  location: string;
  image: File | null;
}

const Post = () => {
  const [productData, setProductData] = useState<ProductTypes>({
    title: "",
    category: "",
    price: 0,
    description: "",
    location: "",
    image: null as File | null,
  });

  const [base64Image, setBase64Image] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      localStorage.setItem("product-image", base64);
      setBase64Image(base64);
      setProductData({ ...productData, image: file });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const product = {
        ...productData,
        price: Number(productData.price),
        image: base64Image,
        createdAt: new Date(),
      };

      const newDocRef = doc(collection(firestore, "Products"));

      await setDoc(newDocRef, {
        ...product,
        id: newDocRef.id,
      });

      Toastify("Product added successfully");

      navigate("/");

      setProductData({
        title: "",
        category: "",
        price: 0,
        description: "",
        location: "",
        image: null,
      });
      setBase64Image(null);
    } catch (error) {
      console.error("Failed to post product:", error);
    }
  };

  return (
    <>
      <div className="text-center pt-2 w-full h-12 my-6">
        <h1 className="font-bold text-2xl ">POST YOUR AD </h1>
      </div>

      <div className="w-full max-w-xs mx-auto my-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="price"
              onChange={handleChange}
              value={productData.price}
              placeholder="Price"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={productData.description}
              onChange={handleChange}
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={handleChange}
              name="location"
              value={productData.location}
              placeholder="Location"
            />
          </div>
          <label className="bg-white text-slate-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 mb-3 fill-gray-500"
              viewBox="0 0 32 32"
            >
              <path
                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                data-original="#000000"
              />
              <path
                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                data-original="#000000"
              />
            </svg>
            Upload file
            <input
              type="file"
              id="uploadFile1"
              className="hidden"
              onChange={handleFileChange}
            />
            <p className="text-xs font-medium text-slate-400 mt-2">
              PNG, JPG SVG, WEBP, and GIF are Allowed.
            </p>
          </label>
          <div className=" mt-5">
            <button
              type="submit"
              className="bg-black w-full h-9 text-white font-bold cursor-pointer"
            >
              Post Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Post;
