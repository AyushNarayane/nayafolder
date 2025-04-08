import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Header.css';

const Header = ({ onLogout }) => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">ShopNow</Link>
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link cart-link">
                Cart
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={onLogout} className="nav-link logout-btn">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;