import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home-page/Home';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
