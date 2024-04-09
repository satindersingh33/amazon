import React from 'react'
import ListOfFirstBestSeller from '../FirstBestSeller/ListofFirstBestSeller'
// import BestSellerCard from "../BestSellerCard/BestSellerCard"
import ParentBestSeller from '../BestSellerCard/ParentBestSeller'
import AmazonNavXShop from "../Header/Amazonnavbar"
import ChildbestSeller from "../BestSellerCard/Childbestseller"


function FirstBestSeller() {
  return (
    <>
  <AmazonNavXShop/>

   <div className="container-fluid">
    <div className="row">
        <div className="col-md-6 "><h3>Amazon Bestsellers</h3>
 <p>Our most popular products based on sales. Updated frequently.</p></div>
    </div>
    <div className="col-12">
        <div className="row">

            <div className="col-md-2 border">
                <ListOfFirstBestSeller/>
            </div>
            <div className="col-md-10 border">
                <ParentBestSeller/>
                <ChildbestSeller/>
                {/* <Cart/> */}
            </div>
        </div>

    </div>
   </div>


    </>
  )
}

export default FirstBestSeller
