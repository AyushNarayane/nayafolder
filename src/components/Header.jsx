import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Naya Shop
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Products
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;