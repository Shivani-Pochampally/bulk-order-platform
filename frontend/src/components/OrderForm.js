import { useState } from "react";
import api from "../services/api";
import "../styles/Order.css";

export default function OrderForm({ product }) {
  const [buyerName, setBuyerName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState(null);

  const submit = async () => {
    try {
      const res = await api.post("/orders", {
        buyer_name: buyerName,
        product_name: product.name,
        quantity: quantity,
        delivery_address: address,
      });

      setOrderId(res.data.orderId);
    } catch (error) {
      alert("Failed to place order");
      console.error(error);
    }
  };

  return (
    <div className="order-box">
      <h2>Order {product.name}</h2>

      <input
        placeholder="Buyer Name"
        value={buyerName}
        onChange={(e) => setBuyerName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity (kg)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={submit}>Place Order</button>

      {orderId && (
        <div className="order-success">
          <h3>Order Placed Successfully ✅</h3>
          <p>
            Order ID: <strong>{orderId}</strong>
          </p>
          <p>Use this ID to track your order.</p>
        </div>
      )}
    </div>
  );
}
