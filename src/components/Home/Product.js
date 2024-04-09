import React from "react";
import { Row, Col,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import StarRating from './StarRating';
import BadgeContainer from './Badgecontainer'; 
import "./product.css"

function Products() {
  // Sample product data
  const products = [
    {
      name: "Z7 PRO",
      image: "https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY200_.jpg",
      price: "$500",
      rating: 4,
      discountPercentage: 11,
      badgeMessage: "Limited time deal"
    },
    {
      name: "NEO 9PRO",
      image: "https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg",
      price: "$899",
      rating: 5,
      discountPercentage: 20,
      badgeMessage: "Special offer"
    },
    {
      name: "narzo N53",
      image: "https://m.media-amazon.com/images/I/41dEcQR7UnL._AC_SY200_.jpg",
      price: "$899",
      rating: 5,
      discountPercentage: 10,
      badgeMessage: "Special offer"
    },
    {
      name: "narzo 60",
      image: "https://m.media-amazon.com/images/I/41snmTn9mrL._AC_SY200_.jpg",
      price: "$899",
      rating: 5,
      discountPercentage: 10,
      badgeMessage: "Special offer"
    },
    {
      name: "Redmi 12",
      image: "https://m.media-amazon.com/images/I/41GsqdiCvOL._AC_SY200_.jpg",
      price: "$899",
      rating: 5,
      discountPercentage: 10,
      badgeMessage: "Special offer"
    },
    {
      name: "One Plus",
      image: "https://m.media-amazon.com/images/I/41PMrVjsowL._AC_SY200_.jpg",
      price: "$899",
      rating: 5,
      discountPercentage: 10,
      badgeMessage: "Special offer"
    },
    {
      name: "POCO M6",
      image: "https://m.media-amazon.com/images/I/41888-BWxKL._AC_SY200_.jpg",
      price: "$899",
      rating: 5,
      discountPercentage: 10,
      badgeMessage: "Special offer"
    },
    {
      name: "HONOR X96 5G",
      image: "https://m.media-amazon.com/images/I/412t8N-6ARL._AC_SY200_.jpg",
      price: "$899",
      rating: 5,
      discountPercentage: 10,
      badgeMessage: "Special offer"
    },
  ];
  const itemsToShow = 4;
  return (
    <div className="products">
      <h2>Mobile Prices</h2>
      <Carousel   indicators={false}>
        {[...Array(Math.ceil(products.length / itemsToShow))].map((_, index) => (
          <Carousel.Item key={index}>
            <Row>
              {products.slice(index * itemsToShow, (index + 1) * itemsToShow).map((product, idx) => (
                <Col md={3} key={idx}>
                  <div className="a-section a-spacing-small _deals-shoveler-v2_style_imageContainer__2Wm4A ">
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.name}
                    />
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    {/* <StarRating rating={product.rating} /> */}
                    <BadgeContainer
                      discountPercentage={product.discountPercentage}
                      message={product.badgeMessage}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Products;





// import React from "react";
// import {  Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import StarRating from './StarRating';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Products() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     buttons: true
//   };

//   return (
//     <div className="products">
//       <h2>Mobile Prices</h2>
//       <Slider {...settings}>
//         <div>
//           <Col md={2}>
//             <div className="product-item">
//               <img
//                 className="product-image"
//                 src="https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY200_.jpg"
//                 alt="iPhone 13"
//               />
//               {/* <h3>iPhone 13</h3> */}
//               <p>$500</p>
//               <StarRating rating={4} />
//             </div>
//           </Col>
//         </div>
//         <div>
//           <Col md={2}>
//             <div className="product-item">
//               <img
//                 className="product-image"
//                 src="https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg"
//                 alt="Samsung Galaxy S21"
//               />
//               {/* <h3>iphone15</h3> */}
//               <p>$899</p>
//               <StarRating rating={5} />
//             </div>
//           </Col>
//         </div>
//         <div>
//           <Col md={2}>
//             <div className="product-item">
//               <img
//                 className="product-image"
//                 src="https://m.media-amazon.com/images/I/41snmTn9mrL._AC_SY200_.jpg" 
//                 alt="Google Pixel 6"
//               />
             
//               <p>$799</p>
//               <StarRating rating={3} />
//             </div>
//           </Col>
//         </div>
//         {/* Add more products here */}
//       </Slider>
//     </div>
//   );
// }

// export default Products;
