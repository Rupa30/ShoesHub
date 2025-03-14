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
import Checkout from './components/Checkout/Checkout';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess';
import ProductDetail from './pages/Product/ProductDetail';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<ShoesPage shoes={shoes} />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/arrivals' element={<Arrivals />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/OrderSuccess" element={<OrderSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
