import React , {useState , useRef} from 'react'
import BestSellerCard from '../BestSellerCard/BestSellerCard'
import './card.css'
import Slider from "react-slick";
export const bestSellerData = [
  {
      imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/61H2zyUxjJL._AC_UL450_SR450,320_.jpg ", 
      trendNo : "1" , 
      catogery: "ANNI DESIGNER Women Kurta with Palazzo" , 
      rating :  "" , 
      rate : "499",
      imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
      imgUrl3 : "https://m.media-amazon.com/images/I/81tUFVkkj-L._SY741_.jpg"

  },
  {
    imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/71YvjrwmV4L._AC_UL450_SR450,320_.jpg", 
    trendNo : "2" , 
    catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
    rating :  "" , 
    rate : "449",
    imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
    imgUrl3 : "https://m.media-amazon.com/images/I/81tUFVkkj-L._SY741_.jpg"
    

},
{
  imgUrl : "	https://images-eu.ssl-images-amazon.com/images/I/61bIkFkmhDL._AC_UL675_SR525,675_.jpg", 
  trendNo : "3" , 
  catogery: "Bon Organik Unisex My First Holi Bodysuit Baby for Women | Beach Dress for Women" , 
  rating :  "" , 
  rate : "269",
  imgUrl2 : "https://m.media-amazon.com/images/I/41bzHDsukcL.jpg" , 
  imgUrl3 : "https://m.media-amazon.com/images/I/51ZnP8AiyuL._SX679_.jpg"

},
{
imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/717pTcRrigL._AC_UL675_SR525,675_.jpg", 
trendNo : "4" , 
catogery: "Allen Solly Men's Regular Fit Polo" , 
rating :  "" ,
rate : "699",
imgUrl2 : "https://images-eu.ssl-images-amazon.com/images/I/51kFlytvjAL._AC_UL675_SR525,675_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/71vSLpVgZpL._SX569_.jpg"

},
{
imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/71FDM6zmNdL._AC_UL675_SR525,675_.jpg", 
trendNo : "5" , 
catogery: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)" , 
rating :  "25" , 
rate : "699",
imgUrl2 : "https://m.media-amazon.com/images/I/618c7+FmaML._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/51BaHyeTsKL._SY741_.jpg"

},
{
imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/817MubHY4ZL._AC_UL450_SR350,450_.jpg", 
trendNo : "6" , 
catogery: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/81AWD-lfFoL._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81wLCHfVn-L._SY741_.jpg"

},
{
imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/81TRdxk1wnL._AC_UL450_SR450,320_.jpg", 
trendNo : "7" , 
catogery: "Polyester 12 Pairs Solid Ankle Length Socks For Men & Women, Multicolor, Pack of 12, Free Size" , 
rating :  "25" , 
rate : "279",
imgUrl2 : "https://m.media-amazon.com/images/I/915cqUi73qL._SX679_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/819F8pfhWZL._SX679_.jpg"

},
{
imgUrl : "	https://images-eu.ssl-images-amazon.com/images/I/71gBla0U3DL._AC_UL675_SR525,675_.jpg", 
trendNo : "8" , 
catogery: "ANNI DESIGNER Women Kurta with Palazzoe" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

},
{
imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/715aY98VTPL._AC_UL675_SR525,675_.jpg", 
trendNo : "9" , 
catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

}
,
{
imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/517jNc-SAqL._AC_UL675_SR525,675_.jpg", 
trendNo : "10" , 
catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

},
{
imgUrl : "	https://images-eu.ssl-images-amazon.com/images/I/61wJKBeaB7L._AC_UL675_SR525,675_.jpg", 
trendNo : "11" , 
catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

},
{
imgUrl : "https://images-eu.ssl-images-amazon.com/images/I/41rYP8sUAbL._AC_UL675_SR525,675_.jpg", 
trendNo : "12" , 
catogery: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women" , 
rating :  "25" , 
rate : "679",
imgUrl2 : "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg" , 
imgUrl3 : "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg"

}
]
function ChildbestSeller() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bestSellerData.length / 4);
  const sliderRef = useRef(null);
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 4000,
  afterChange: (index) => setCurrentPage(index + 1),
  ref : sliderRef
  

};
const handleStarOver = ()=>{
  if (sliderRef.current) {
    sliderRef.current.slickGoTo(0); // Go to the first page
    setCurrentPage(1); // Reset current page state
  }

}
  return (
    <>

   

<div >

        <h3>Bestsellers in Toys & Games <span style={{color: "blue", fontSize: "12px"}}>See More</span></h3>
        <div  className='pagination'>
       <p> Page {currentPage} of {totalPages}</p>
       {currentPage !== 1 && (
        <span onClick={handleStarOver}>Start Over</span>
      )}
      </div>
      </div>
     

      <Slider {...settings}>
        {[...Array(Math.ceil(bestSellerData.length / 4))].map((_, index) => (
          <div key={index}>
            <div className='all-bestseller-card'>
              {bestSellerData.slice(index * 4, index * 4 + 4).map((card, cardIndex) => (
                <BestSellerCard key={cardIndex} data={card}/> 
              ))}
            </div>
          </div>
        ))}
      </Slider>
     
    </>
  )
}

export default ChildbestSeller