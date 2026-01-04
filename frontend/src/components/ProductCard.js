import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price} / kg</p>
      <button onClick={() => navigate("/order", { state: product })}>
        Order Now
      </button>
    </div>
  );
}
