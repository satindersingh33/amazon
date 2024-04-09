import React from 'react'
import "./AmazonNavXShop.css"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const NavBarTwo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
    <div className='parent_sec_nav'>
     <div className='all_overlay'>
    <Button onClick={handleShow} > <FaBars className='fa_bars' /><span>All</span></Button>
    <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton />
    <div className='side-bar'>
        <h4><FaUserCircle />  Hello, Signin</h4>
    </div>
    <Offcanvas.Body>
        <div>
            <h3> Help & Setting</h3>
            <p>Your Account</p>
            <p>Customer Service</p>
            <p className='linksign'><Link to='/signup'>SignIn</Link></p>
        </div>
        <div>
            <h3> Trending</h3>
            <p>Best Seller <i className="nav-sprite hmenu-arrow-next"></i></p> {/* Added navigation arrow */}
            <p>New Releases</p>
        </div>
    </Offcanvas.Body>
</Offcanvas>


     </div>
     <div className='b'>
        <a href="">Amazon miniTv</a>
     </div>
     <div className='b' >
        <a href="">Sell</a>
     </div>
     <div  className='b'>
        <a href="/best-seller">Best Sellers</a>
     </div>
     <div  className='b'>
        <a href="">Mobiles</a>
     </div>
     <div className='b'>
        <a href="">Toaday Deals</a>
     </div>
     <div  className='b'>
        <a href="">Electronics</a>
     </div>
     <div className='b'>
        <a href="">Customer Service</a>
     </div>
     <div className='b'>
        <a href="">Prime
        <MdOutlineArrowDropDown />
        </a> 
     </div>
     <div className='b'>
        <a href="">New Releases</a>
     </div>
     <div  className='b'>
        <a href="">Home & Kitchen</a>
     </div >
     <div className='b'>
        <a href="">Gift Ideas</a>
     </div>
     <div  className='b'>
        <a href="">Amazon Pay</a>
     </div>
     <div  className='b'>
        <a href="">Fashion </a>
     </div>
     <div className='b'>
        <a href="">Computer</a>
     </div>



    </div>



    </div>
  )
}

export default NavBarTwo























// import React from 'react';
// import './AmazonNavXShop.css'; 

// function AmazonNavXShop() {
//   return (
//     <div className="nav-xshop">
//       <a href="/b/32702023031?node=32702023031&amp;ld=AZINSOANavDesktop_T3&amp;ref_=nav_cs_sell_T3" className="nav-a">Sell</a>
//       <a href="/gp/bestsellers/?ref_=nav_cs_bestsellers" className="nav-a">Best Sellers</a>
//       <a href="/mobile-phones/b/?ie=UTF8&amp;node=1389401031&amp;ref_=nav_cs_mobiles" className="nav-a">Mobiles</a>
//       <a href="/electronics/b/?ie=UTF8&amp;node=976419031&amp;ref_=nav_cs_electronics" className="nav-a">Electronics</a>
//       <a href="/gp/help/customer/display.html?nodeId=200507590&amp;ref_=nav_cs_help" className="nav-a">Customer Service</a>
//       <a href="/Home-Kitchen/b/?ie=UTF8&amp;node=976442031&amp;ref_=nav_cs_home" className="nav-a">Home & Kitchen</a>
//       <a href="/deals?ref_=nav_cs_gb" className="nav-a">Today's Deals</a>
//       {/* Add more links here */}
//     </div>
//   );
// }

// export default AmazonNavXShop;

