import React , {useState , useRef} from 'react'
import BestSellerCard from '../BestSellerCard/BestSellerCard'
import './card.css'
import Slider from "react-slick";
export const bestSellerData = [
  {
      imgUrl : "https://m.media-amazon.com/images/I/71BLkd39VKL._SY741_.jpg ", 
      trendNo : "1" , 
      catogery: "ANNI DESIGNER Women Kurta with Palazzo" , 
      name: "ANNI DESIGNER Women Kurta with Palazzo" , 
      rating :  "" , 
      rate : "499",
      imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
      imgUrl3 : "https://m.media-amazon.com/images/I/81tUFVkkj-L._SY741_.jpg"

  },
  {
    imgUrl : "https://m.media-amazon.com/images/I/71tF9O0WgwL._SY741_.jpg ", 
    trendNo : "2" , 
    catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
    name: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
    rating :  "" , 
    rate : "449",
    imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
    imgUrl3 : "https://m.media-amazon.com/images/I/81tUFVkkj-L._SY741_.jpg"
    

},
{
  imgUrl : "https://m.media-amazon.com/images/I/51ZQzVWvFyL._SX679_.jpg", 
  trendNo : "3" , 
  catogery: "Bon Organik Unisex My First Holi Bodysuit Baby for Women | Beach Dress for Women" , 
  name: "Bon Organik Unisex My First Holi Bodysuit Baby for Women | Beach Dress for Women" , 
  rating :  "" , 
  rate : "269",
  imgUrl2 : "https://m.media-amazon.com/images/I/41bzHDsukcL.jpg" , 
  imgUrl3 : "https://m.media-amazon.com/images/I/51ZnP8AiyuL._SX679_.jpg"

},
{
imgUrl : "https://m.media-amazon.com/images/I/71eUwDk8z+L._SY879_.jpg", 
trendNo : "4" , 
catogery: "Allen Solly Men's Regular Fit Polo" , 
name: "Allen Solly Men's Regular Fit Polo" , 
rating :  "" ,
rate : "699",
imgUrl2 : "https://m.media-amazon.com/images/I/71Xu6C8X5sL._SX569_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/71vSLpVgZpL._SX569_.jpg"

},
{
imgUrl : "https://m.media-amazon.com/images/I/518TgMUUFBL._SY879_.jpg", 
trendNo : "5" , 
catogery: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)" , 
name: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)" , 
rating :  "25" , 
rate : "699",
imgUrl2 : "https://m.media-amazon.com/images/I/618c7+FmaML._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/51BaHyeTsKL._SY741_.jpg"

},
{
imgUrl : "https://m.media-amazon.com/images/I/71GoGpdI2NL._SY741_.jpg", 
trendNo : "6" , 
catogery: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)" , 
name: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/81AWD-lfFoL._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81wLCHfVn-L._SY741_.jpg"

},
{
imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/81TRdxk1wnL._AC_UL450_SR450,320_.jpg", 
trendNo : "7" , 
catogery: "Polyester 12 Pairs Solid Ankle Length Socks For Men & Women, Multicolor, Pack of 12, Free Size" , 
name: "Polyester 12 Pairs Solid Ankle Length Socks For Men & Women, Multicolor, Pack of 12, Free Size" , 
rating :  "25" , 
rate : "279",
imgUrl2 : "https://m.media-amazon.com/images/I/915cqUi73qL._SX679_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/819F8pfhWZL._SX679_.jpg"

},
{
imgUrl : "https://m.media-amazon.com/images/I/71BLkd39VKL._SY741_.jpg", 
trendNo : "8" , 
catogery: "ANNI DESIGNER Women Kurta with Palazzoe" , 
name: "ANNI DESIGNER Women Kurta with Palazzoe" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

},
{
imgUrl : "https://m.media-amazon.com/images/I/51znqdelPbL._SY879_.jpg", 
trendNo : "9" , 
catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
name: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

}
,
{
imgUrl : "https://m.media-amazon.com/images/I/51uSxAeuAkL._SY879_.jpg", 
trendNo : "10" , 
catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
name: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

},
{
imgUrl : "https://m.media-amazon.com/images/I/71Hy7lDZiaL._SY879_.jpg", 
trendNo : "11" , 
catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
name: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

},
{
imgUrl : "https://m.media-amazon.com/images/I/61djfSpIP3L._SX679_.jpg", 
trendNo : "12" , 
catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
name: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

}
]


function ParentBestSeller() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bestSellerData.length / 4);
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentPage(index + 1),
    ref: sliderRef
  };

  const handleStartOver = () => {
    setCurrentPage(1); 
    sliderRef.current.slickGoTo(0); 
  };

  return (
    <>
      <div>
        <h3>Bestsellers in Clothing & Accessories <span style={{ color: "blue", fontSize: "12px" }}>See More</span></h3>
        <div className="pagination">
          <p>Page {currentPage} of {totalPages}</p>
          {currentPage > 1 && <p onClick={handleStartOver}>Start Over</p>}
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {[...Array(Math.ceil(bestSellerData.length / 4))].map((_, index) => (
          <div key={index}>
            <div className="all-bestseller-card">
              {bestSellerData
                .slice(index * 4, index * 4 + 4)
                .map((card, cardIndex) => (
                  <BestSellerCard key={cardIndex} data={card} />
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default ParentBestSeller





// import { useState } from 'react'
// import React from 'react'
// import BestSellerCard from '../BestSellerCard/BestSellerCard'
// import './card.css'
// import Slider from "react-slick";
// function ParentBestSeller() {


  
//     let card1 = {
//         imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/71BLkd39VKL._AC_UL450_SR450,320_.jpg ", 
//         trendNo : "1" , 
//         catogery: "ANNI DESIGNER Women Kurta with Palazzo" , 
//         rating :  "" , 
//         rate : "499"

//     }
//     let card2 = {
//       imgUrl : "https://m.media-amazon.com/images/I/71tF9O0WgwL._SY741_.jpg ", 
//       trendNo : "2" , 
//       catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
//       rating :  "" , 
//       rate : "449"

//   }
//   let card3 = {
//     imgUrl : "https://m.media-amazon.com/images/I/51ZQzVWvFyL._SX679_.jpg", 
//     trendNo : "3" , 
//     catogery: "Bon Organik Unisex My First Holi Bodysuit Baby for Women | Beach Dress for Women" , 
//     rating :  "" , 
//     rate : "269"

// }
// let card4 = {
//   imgUrl : "https://m.media-amazon.com/images/I/71eUwDk8z+L._SY879_.jpg", 
//   trendNo : "4" , 
//   catogery: "Allen Solly Men's Regular Fit Polo" , 
//   rating :  "" ,
//   rate : "699"

// }
// let card5 = {
//   imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/51znqdelPbL._AC_UL450_SR450,320_.jpg", 
//   trendNo : "5" , 
//   catogery: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)" , 
//   rating :  "25" , 
//   rate : "699"

// }
// let card6 = {
//   imgUrl : "https://m.media-amazon.com/images/I/71GoGpdI2NL._SY741_.jpg", 
//   trendNo : "6" , 
//   catogery: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)" , 
//   rating :  "25" , 
//   rate : "679"

// }
// let card7 = {
//   imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/81TRdxk1wnL._AC_UL450_SR450,320_.jpg", 
//   trendNo : "7" , 
//   catogery: "Polyester 12 Pairs Solid Ankle Length Socks For Men & Women, Multicolor, Pack of 12, Free Size" , 
//   rating :  "25" , 
//   rate : "279"

// }
// let card8 = {
//   imgUrl : "https://m.media-amazon.com/images/I/71BLkd39VKL._SY741_.jpg", 
//   trendNo : "8" , 
//   catogery: "ANNI DESIGNER Women Kurta with Palazzoe" , 
//   rating :  "25" , 
//   rate : "679"

// }
// let card9 = {
//   imgUrl : "https://m.media-amazon.com/images/I/51znqdelPbL._SY879_.jpg", 
//   trendNo : "9" , 
//   catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
//   rating :  "25" , 
//   rate : "679"

// }

// let card10 = {
//   imgUrl : "https://m.media-amazon.com/images/I/51uSxAeuAkL._SY879_.jpg", 
//   trendNo : "10" , 
//   catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
//   rating :  "25" , 
//   rate : "679"

// }
// let card11 = {
//   imgUrl : "https://m.media-amazon.com/images/I/71Hy7lDZiaL._SY879_.jpg", 
//   trendNo : "11" , 
//   catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
//   rating :  "25" , 
//   rate : "679"

// }
// let card12 = {
//   imgUrl : "https://m.media-amazon.com/images/I/61djfSpIP3L._SX679_.jpg", 
//   trendNo : "12" , 
//   catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
//   rating :  "25" , 
//   rate : "679"

// }

// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true, 
//   autoplaySpeed: 2000,
  
// };
// const [currentPage,setCurrentPage]=useState(1)
//    const totalPages=Math.ceil(card1.length/5)
//   const  startOver=()=>{
//     setCurrentPage(1); // Set currentPage state to 1
//     Slider.current.slickGoTo(0);
//   }

//   return (
//     <>

//    <div>
//    <div>
//   <h3>Bestsellers in Clothing & Accessories <span style={{color: "blue" , fontSize: "12px"}}>See More</span></h3>

// </div>
// <div className='start_over_div'>
//                            <span>Page</span>&nbsp;
//                            <span>{currentPage }&nbsp;of&nbsp;{totalPages}</span>|                      
//                            <span onClick={startOver} className='heading_start_over'>Start Over</span>
//                     </div>

//    </div>



//      <Slider {...settings}>
//       <div>
//       <div className='all-bestseller-card'>
//      <BestSellerCard data= {card1}/> 
//      <BestSellerCard data= {card2}/> 
//      <BestSellerCard data= {card3}/> 
//      <BestSellerCard data= {card4}/> 
//      </div>
//       </div>
//       <div>
//       <div className='all-bestseller-card'>
//      <BestSellerCard data= {card5}/> 
//      <BestSellerCard data= {card6}/> 
//      <BestSellerCard data= {card7}/> 
//      <BestSellerCard data= {card8}/> 
//      </div>
//       </div>
//       <div>
//       <div className='all-bestseller-card'>
//      <BestSellerCard data= {card9}/> 
//      <BestSellerCard data= {card10}/> 
//      <BestSellerCard data= {card11}/> 
//      <BestSellerCard data= {card12}/> 
//      </div>
//       </div>
//       <div>
//       <div className='all-bestseller-card'>
//      <BestSellerCard data= {card1}/> 
//      <BestSellerCard data= {card2}/> 
//      <BestSellerCard data= {card3}/> 
//      <BestSellerCard data= {card4}/> 
//      </div>
//       </div>
     
//     </Slider>
//     </>
//   )
// }

// export default ParentBestSeller
