import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home-page/Home';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import CartPage from './pages/cart-page/CartPage';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
