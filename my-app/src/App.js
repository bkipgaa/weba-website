import React from 'react'; // Import React library
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Products from './Pages/Products';
import About_us from './Pages/About_us';
import Home from './Pages/Home';
import Coverage from './Pages/Coverage'
import Careers from './Pages/Careers'
import Internet_Status from './Pages/Internet_Status';
import Poa_Home from './Pages/PoaHome/Poa_Home';
// Import the Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    
        <Route path="/products/:category" element={<Products />} />
       
        <Route path="/about" element={<About_us />} />
        <Route path="/coverage" element={<Coverage/>} />
        <Route path="/internet_status" element={<Internet_Status/>}/>
        <Route path="/careers" element={<Careers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/poa-home" element={<Poa_Home />} />
    <Route path="/selfcare" element={<LoginSignup/>} />
    </Routes>
    
    </BrowserRouter>
  
  
    
    



</div>
  )
}



export default App;;
