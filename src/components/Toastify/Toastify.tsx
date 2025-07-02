import { toast } from "react-toastify";

export function Toastify(message: string) {
  const notify = () =>
    toast(message, {
      style: {
        backgroundColor: "#0d9488",
        color: "#fff",
        fontWeight: "bold",
      },
    });
  notify();
}
