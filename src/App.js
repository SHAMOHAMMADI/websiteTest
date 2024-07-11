import './App.css';
import Navbar from "./components/header/Navbar"
import Home from "./pages/home/Home"
import { Routes , Route } from 'react-router-dom';
import Products from './pages/products/Products';
import Gallery from './pages/gallery/Gallery';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';


function App() {
  return (
    <div className="App">
<Routes>
      <Route to="/" element={<Home />} />
      <Route to="/product" element={<Products />} />
      <Route to="/gallery" element={<Gallery />} />
      <Route to="/aboutus" element={<AboutUs />} />
      <Route to="/contactus" element={<ContactUs />} />
</Routes>
 
    </div>
  );
}

export default App;
