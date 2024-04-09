import React from "react";
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import Products from "./Product";
import ParentCard from "./ParentCard";
import Deals from "../products/Deal";
// import Bestseller from "../BestSeller/Bestseller";
import AmazonNavXShop from "../Header/Amazonnavbar";




function Home() {

  return (
    <div>
  <AmazonNavXShop/>

 <div className="home">
      <div className="home__container">
        <Carousel className="carousel"  indicators={false}>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/MARCH/GW/Custom/Desktop_Hero_3000x1200_2x._CB579478855_.jpg"
              height="80%" width="100%"
              alt=""   
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/Holi/Makeup-PC._CB578876927_.jpg"
              height="80%" width="100%"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
              height="80%" width="100%"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/March/Unrec/pc._CB579500150_.jpg"
              height="80%" width="100%"
              alt=""  
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="card__container">
       <ParentCard/>
      </div>    

      
    </div>
    <div className=" product-container">
        <Products/>
      </div>
  <div>
    <Deals/>
  </div>
 </div>
   
  );
};

export default Home;

