import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Admin.css";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders").then(res => setOrders(res.data));
  }, []);

  const markDelivered = (id) => {
    api.put(`/orders/${id}`, { status: "Delivered" })
      .then(() => {
        setOrders(prev =>
          prev.map(o =>
            o.id === id ? { ...o, status: "Delivered" } : o
          )
        );
      });
  };

  return (
    <div className="admin-container">
      <h2>Admin Orders</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Buyer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.buyer_name}</td>
              <td>{order.product_name}</td>
              <td>{order.quantity}</td>
              <td>{order.delivery_address}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>
                {order.status === "Pending" ? (
                  <button onClick={() => markDelivered(order.id)}>
                    Mark Delivered
                  </button>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
