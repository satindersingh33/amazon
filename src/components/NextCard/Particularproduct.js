import React from 'react';
import { useParams } from 'react-router-dom';
import { bestSellerData }  from "../BestSellerCard/ParentBestSeller";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './next.css';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { VscStarFull } from "react-icons/vsc";
import { TbStarHalfFilled } from "react-icons/tb";
import { addToCart } from '../redux/cartSlice'; 
import { useDispatch, useSelector } from 'react-redux';


function PrarticularProduct(props) {
  const { catogery } = useParams();
  const dispatch = useDispatch();
  const product = bestSellerData.find(item => item.catogery === catogery);
  const state = useSelector(state => state.cartItems);
  const handleAddToCart = () => {
    dispatch(addToCart(product));
   
    localStorage.setItem('reduxState', JSON.stringify(state));
  };
  return (
    <div className="container-fluid ">
<div className="row">
        <div className="col-md-5 border product-crousel">
          <Carousel  autoPlay={false}>
            
            <div>
              <img src={product.imgUrl} className="carousel-image" alt="Product" />
            </div>
            <div>
              <img src={product.imgUrl2} className="carousel-image" alt="Product" />
            </div>
            <div>
              <img src={product.imgUrl3} className="carousel-image" alt="Product" />
            </div>
          </Carousel>
        </div>
  
        <div className="col-md-5 border main-all-product ">
          <div className="product-title">
            <h4>{product.catogery}</h4>

            <span style={{ color: "#c8732d" }}>Ratings</span>
            <VscStarFull style={{ color: "#c8732d" }} />
            <VscStarFull style={{ color: "#c8732d" }} />
            <VscStarFull style={{ color: "#c8732d" }} />
            <TbStarHalfFilled style={{ color: "#c8732d" }} />

            <TbStarHalfFilled style={{ color: "#c8732d" }} />

          </div> <hr />
          <div className="product-price">
            <span>limited time deal</span><br />
            <strong className='best-seller-price'><LiaRupeeSignSolid />{product.rate}</strong>
            <p>M.R.P <i className='less-price'> 2,599</i></p>
            <p className="a-size-base">Inclusive of all taxes</p>
          </div> <hr />
          <div className="offers-items">
            <p><b>Partner Offers</b></p>
            <p>Get GST invoice and save up to 28% on business purchases.</p>
          </div> <hr />
          <div className="return">
            <div>
              <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" />
              <p>10 days Return & Exchange</p>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="" />
              <p>Pay on Delivery
                Free Delivery
              </p>
            </div>
            <div>'
              <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" />
              <p>Free Delivery</p>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="" />
              <p>Amazon Delivered</p>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png" alt="" />
              <p>Secure transaction</p>
            </div>
          </div>
          <div className="product-size">
            <p><b>Size</b></p>
            <select name="" id="" className='size'>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="Xl">XL</option>
              <option value="XXL">XXL</option>
              <option value="3 XL">3Xl</option>
            </select>
          </div>
          <div className="product-details">
            <div className="product-details">
              <h5>Product Details</h5>
              <ul style={{ 'listStyleType': 'none' }}>
                <li><strong>Material composition:</strong> Cotton Blend</li>
                <li><strong>Length:</strong> Calf Length</li>
                <li><strong>Sleeve type:</strong> 3/4 Sleeve</li>
                <li><strong>Neck style:</strong> Round Neck</li>
                <li><strong>Style:</strong> Regular</li>
                <li><strong>Material type:</strong> Cotton Blend</li>
                <li><strong>Country of Origin:</strong> India</li>
              </ul>
            </div>
            <div className="additional-details">
              <h2>About this item</h2>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Kurta and Bottom Fabric:</strong></td>
                    <td>Cotton Blend</td>
                  </tr>
                  <tr>
                    <td><strong>Kurta Set Color:</strong></td>
                    <td>Green</td>
                  </tr>
                  <tr>
                    <td><strong>Style:</strong></td>
                    <td>Straight</td>
                  </tr>
                  <tr>
                    <td><strong>Length:</strong></td>
                    <td>Calf Length</td>
                  </tr>
                  <tr>
                    <td><strong>Sleeves:</strong></td>
                    <td>3/4 Sleeves</td>
                  </tr>
                  <tr>
                    <td><strong>Size Chart (Kurta):</strong></td>
                    <td>S-36 in, M-38 in, L-40 in, XL-42 in, XXL-44 in</td>
                  </tr>
                  <tr>
                    <td><strong>Size Chart (Pant):</strong></td>
                    <td>S-28 in, M-30 in, L-32 in, XL-34 in, XXL-36 in</td>
                  </tr>
                  <tr>
                    <td><strong>Includes:</strong></td>
                    <td>1 Kurta with 1 Pant</td>
                  </tr>
                  <tr>
                    <td><strong>Work:</strong></td>
                    <td>Printed</td>
                  </tr>
                  <tr>
                    <td><strong>Neck Style:</strong></td>
                    <td>Round Neck</td>
                  </tr>
                  <tr>
                    <td><strong>Colour Declaration:</strong></td>
                    <td>There might be slight variation in the actual color of the product due to different screen resolutions.</td>
                  </tr>
                  <tr>
                    <td><strong>Occasion:</strong></td>
                    <td>Traditional wear, Casual Wear, party wear, evening wear</td>
                  </tr>
                  <tr>
                    <td><strong>For More Products:</strong></td>
                    <td>Please Click On Brand Name "ANNI DESIGNER"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-2 border">

          <p>{product.description}</p>
          <button   onClick={()=>handleAddToCart(product)} >Add to Cart</button>


        </div>
      </div>
    </div>
    
  );
}

export default PrarticularProduct;

