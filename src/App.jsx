import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ShoesPage from './pages/ShoesPage/ShoesPage';
// import shoes from './lib/ShoesData';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Collection from './pages/Collection/Collection';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <ShoesPage shoes={shoes} /> */}
      </div>
    </Router>
  );
}

export default App;
