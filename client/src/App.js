import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home-page/Home';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import CartPage from './pages/cart-page/CartPage';
import AddDish from './pages/seller/AddDish';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/add-dish/*' element={<AddDish />} >
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
