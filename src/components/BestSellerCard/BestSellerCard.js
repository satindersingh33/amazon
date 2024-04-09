import React from 'react';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { VscStarFull } from "react-icons/vsc";
import { TbStarHalfFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function BestSellerCard(props) {
  const { catogery, trendNo, imgUrl, rate } = props.data;
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/nextcard/paticularproduct/${catogery}`);
  };

  return (
    <div className="card-best-seller">
      <div className="trend-no">
        <p>#{trendNo}</p>
        <div className="arrow"></div>
      </div>
      <div className="card-best-seller-img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="best-seller-catogery">
        <p onClick={handleCategoryClick}>{catogery}</p>
      </div>
      <div className="best-seller-rating">
        <VscStarFull style={{ color: "#c8732d" }} />
        <VscStarFull style={{ color: "#c8732d" }} />
        <VscStarFull style={{ color: "#c8732d" }} />
        <TbStarHalfFilled style={{ color: "#c8732d" }} />
        <TbStarHalfFilled style={{ color: "#c8732d" }} />
      </div>
      <div className="best-seller-price">
        <p><LiaRupeeSignSolid /> {rate}</p>
      </div>
    </div>
  );
}

export default BestSellerCard;


