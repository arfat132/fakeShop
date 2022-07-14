import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
