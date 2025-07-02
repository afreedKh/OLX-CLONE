export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  category: string;
  createdAt?: { seconds: number };
}
