import React from "react";
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header  from "./components/Header/Header"
import Footer  from "./components/Header/Footer"

import Signup from "./components/signup/Signup";
import Register from "./components/signup/Registers";
import FirstBestSeller from "./components/FirstBestSeller/FirstBestSeller";
import BestSeller from "./components/Bestseller/Bestseller";
import { FaICursor } from "react-icons/fa6";
import ForgotPassword from "./components/Forgotpassword/forgotpassword";
import PrarticularProduct from "./components/NextCard/Particularproduct";
// import ParticularproductDetail from "./components/NextCard/Particularproduct";
import Cart from "./components/cart/Cart";


function App() {
return (
  <div className="app">
    <BrowserRouter>
      <Header/>
        <Routes>

        <Route path="/" element={<Home />}/>   
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route  path="/best-seller" element={<BestSeller/>}/>
       <Route path = '/firstBestSeller' element= {<FirstBestSeller/>} />
       <Route path="/nextcard/paticularproduct/:catogery" element={<PrarticularProduct />}/>
       <Route path="/cart" element={<Cart/>}/>



       <Route path = "/forgot-password" element ={<ForgotPassword/>}/>
        <Route path="/register" element={<Register/>}/>
                                 
        </Routes>
        <Footer/>

    
    </BrowserRouter>

    
  </div>
);
}
export default App



