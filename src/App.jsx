import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated on app load
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <CartProvider>
        {isAuthenticated && <Header onLogout={handleLogout} />}
        <main className="container">
          <Routes>
            <Route 
              path="/" 
              element={
                isAuthenticated ? 
                <ProductList /> : 
                <Navigate to="/login" />
              } 
            />
            <Route 
              path="/login" 
              element={
                !isAuthenticated ? 
                <Login setIsAuthenticated={setIsAuthenticated} /> : 
                <Navigate to="/" />
              } 
            />
            <Route 
              path="/product/:id" 
              element={
                isAuthenticated ? 
                <ProductDetail /> : 
                <Navigate to="/login" />
              } 
            />
            <Route 
              path="/cart" 
              element={
                isAuthenticated ? 
                <Cart /> : 
                <Navigate to="/login" />
              } 
            />
          </Routes>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;