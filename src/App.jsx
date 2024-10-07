import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoesPage from './pages/ShoesPage/ShoesPage';
import shoes from './lib/ShoesData';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './components/About/About';
import Popular from './components/Popular/Popular'
import Arrivals from './components/Arrivals/Arrivals';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<ShoesPage shoes={shoes} />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/arrivals' element={<Arrivals />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
