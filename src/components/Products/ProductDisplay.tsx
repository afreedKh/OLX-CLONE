import { useEffect, useState } from "react";
import type { Product } from "../../Types/Product";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../Firebase/Firebase";
import spinner from '../../assets/load-32_256.gif';

type Props = {
  id:string
}


const ProductDisplay = ({id}:Props) => {

  const [product,setProduct] = useState<Product | null>(null)
  const [loading,setLoading] = useState<boolean>(false)

  useEffect(()=>{
    setLoading(true)
    const fetchData = async()=>{
      const productRef =  doc(firestore,'Products',id);
      const productSnap = await getDoc(productRef);
      setProduct({...productSnap.data()} as Product) 
      setLoading(false)
    }
    fetchData();
  },[id])


  return (
   loading? <div className="login-spinner w-full h-screen flex items-center justify-center">
      <img src={spinner} alt="" className="w-14" />
    </div>:
    <>
    <div className="grid grid-cols-[65%_35%] mt-7 gap-4 px-18">
      <div className="rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-[450px] object-cover"
          src={product?.image}
          alt="Product"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Details</div>
          <div className="flex text-[14px]">
            <span className="font-medium">Brand</span>
            <span className="ml-40 font-medium">{product?.category}</span>
          </div>

          <div className="pt-11 mt-12 border-t border-gray-300">
            <div className="font-bold text-xl mb-2">Description</div>
            <p className="text-gray-700 text-base">
              {product?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded overflow-hidden shadow-lg bg-white h-fit">
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2">₹ {product?.price}</div>
            <p className="text-gray-700 text-[16px]">
              {product?.title}
            </p>
            <div className="flex justify-between text-sm text-gray-500 pt-2 mt-4">
              <span>{product?.location}</span>
              <span>Jun 22</span>
            </div>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-white h-fit">
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2">Posted in</div>
            <p className="text-gray-700 text-[16px]">
              {product?.description}
            </p>
            
          </div>
        </div>
      </div>
    </div>
      <p className="m-24 text-[12px]"> <b> Disclaimer</b>: Please note that OLX serves as online marketplace and intermediary and merely providing the platform to the listers to list their businesses. The products listed on our platform are provided by third party i.e listers with the pricing marked at their discretion. We do not verify the authenticity or quality of these products, and we make no representations or warranties regarding their genuineness. By using our platform, you acknowledge that any purchase made is at your own risk, and we are not liable for any issues related to product authenticity, quality, or performance. We encourage users to exercise caution and discretion before making any payments to the listers.</p>
    </>

  );
};

export default ProductDisplay;
