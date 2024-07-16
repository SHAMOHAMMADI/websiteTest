import './App.css';
import Navbar from "./components/header/Navbar"
import Home from "./pages/home/Home"
import { Routes , Route } from 'react-router-dom';
import Products from './pages/products/Products';
import Gallery from './pages/gallery/Gallery'
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import SubProducts from './pages/products/subProducts';


function App() {
  return (
    <div className="App">
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="product" element={<Products />} />
      <Route path="SubProducts" element={<SubProducts/>} />
      <Route path="galler" element={<Gallery />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="contactus" element={<ContactUs />} />
</Routes>
 
    </div>
  );
}

export default App;
