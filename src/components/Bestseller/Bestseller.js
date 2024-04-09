import React from 'react'
// import FirstNav from '../Navbars/FirstNav'
// import NavBarTwo from '../Navbars/NavBarTwo'
import { NavLink, Outlet } from 'react-router-dom'
import './bestseller.css'
import AmazonNavXShop from "../Header/Amazonnavbar"
// import ParticularproductDetail from '../NextCard/Particularproduct'
function BestSeller() {
  return (
    <>
    {/* <FirstNav/>
    <NavBarTwo/> */}
  <AmazonNavXShop/>
     <nav className='bestSellerNav'>
    <NavLink className ="active_nav" to='/firstBestseller'>BestSeller</NavLink>
   
     </nav>

    <Outlet/>
    </>
 
  
    
  )
}

export default BestSeller