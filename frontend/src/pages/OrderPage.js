import { useLocation } from "react-router-dom";
import OrderForm from "../components/OrderForm";

export default function OrderPage() {
  const { state: product } = useLocation();

  if (!product) return <h2>No product selected</h2>;

  return <OrderForm product={product} />;
}
