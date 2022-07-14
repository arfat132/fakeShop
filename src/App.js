import './App.css';
import Home from './components/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
