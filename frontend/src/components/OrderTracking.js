import { useState } from "react";
import api from "../services/api";

export default function OrderTracking() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");

  const track = async () => {
    const res = await api.get(`/orders/${id}`);
    setStatus(res.data.status);
  };

  return (
    <div className="order-box">
      <h2>Track Order</h2>
      <input placeholder="Order ID" onChange={e => setId(e.target.value)} />
      <button onClick={track}>Check</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
}
