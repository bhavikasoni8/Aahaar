import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home-page/Home';
import './App.css'
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
