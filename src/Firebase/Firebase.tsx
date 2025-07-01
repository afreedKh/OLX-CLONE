import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import type { Product } from "../Types/Product";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();
const firestore = getFirestore();

const fetchFromFirestore = async () => {
  try {
    const productsCollection = collection(firestore, "Products");
    const productDocuments = await getDocs(productsCollection);
    const productList = productDocuments.docs.map((doc)=>{
      const data = doc.data();
      return {...data}
    })as Product[]
    return productList;
  } catch (error) {
    console.error("error fetching from firestore");
    return [];
  }
};

export { auth, provider, storage, firestore, fetchFromFirestore };
