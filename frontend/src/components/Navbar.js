import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 style={{ color: '#ffffff' }}>Veg & Fruit Bulk Order</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/track">Track Order</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
