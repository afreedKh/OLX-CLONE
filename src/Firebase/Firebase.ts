import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import type { Product } from "../Types/Product";
import { Toastify } from "../components/Toastify/Toastify";

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


const USERS_COLLECTION = "user";
const PRODUCTS_COLLECTION = "Products";


const fetchFromFirestore = async () => {
  try {
    const productsCollection = collection(firestore, PRODUCTS_COLLECTION);
    const productDocuments = await getDocs(productsCollection);

    const productList: Product[] = productDocuments.docs.map((doc) => {
      const data = doc.data() as Omit<Product, "id">;
      return { id: doc.id, ...data };
    });
    return productList;
  } catch (error) {
    console.error("error fetching from firestore");
    return [];
  }
};

interface UserDetails {
  name?: string;
  email: string;
  password: string;
}

const signup = async (userDetails: UserDetails) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    const users = res.user;
    await addDoc(collection(firestore, USERS_COLLECTION), {
      id: users.uid,
      name: userDetails.name,
      email: users.email,
      authProvider: "local",
    });
    Toastify("Signup Successful");
  } catch (error) {
    Toastify("Error occured");
    console.error("Error signup ", error);
  }
};

const login = async (userDetails: UserDetails) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    Toastify("Login successfully");
  } catch (error) {
    console.error("login error", error);
    Toastify("Invalid Credential");
  }
};

export {
  auth,
  provider,
  storage,
  firestore,
  fetchFromFirestore,
  signup,
  login,
};
