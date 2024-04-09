import React from 'react'
import ChildCard from './Childcard'
import './Card.css'
function ParentCard() {
    const card1 = {
        heading : "Revamp your home in style" , 
        imgUrl1 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg" , 
        imgUrl2 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" , 
        imgUrl3 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg" , 
        imgUrl4 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg" , 
        title1: "Bedsheet",
        title2: "vases",
        title3: "Home Storage",
        title4: "Lightning Solution",
    }
    const card2 = {
        heading : "Appliances for your home | Up to 55% off" , 
        imgUrl1 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" , 
        imgUrl2 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg " , 
        imgUrl3 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" , 
        imgUrl4 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" , 
        title1: "Air conditioners",
        title2: "Refrigenrator",
        title3: "Microwave",
        title4: "Washing Mashine",
    }
    const card3 = {
        heading : "Up to 60% off | Styles for men" , 
        imgUrl1 : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" , 
        imgUrl2 : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg " , 
        imgUrl3 : "https:images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" , 
        imgUrl4 : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" , 
        title1: "Cloths",
        title2: "Shoes",
        title3: "Watches",
        title4: "Bags",
    }
    const card4= {
        heading : "Starting ₹99 | All your home improvement needs" , 
        imgUrl1 : "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg" , 
        imgUrl2 : "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg " , 
        imgUrl3 : "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg" , 
        imgUrl4 : "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg" , 
        title1: " Spin mops, wipes & more",
        title2: "accessories",
        title3: "hamers",
        title4: "extension board",
    }
    const card5= {
        heading : "Up to 75% off | Headphones" , 
        imgUrl1 : "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg" , 
        imgUrl2 : "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg" , 
        imgUrl3 : "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg" , 
        imgUrl4 : "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg" , 
        title1: "Bolt",
        title2: "boAt",
        title3: "Noise",
        title4: "Zebronic",
    }
    const card6= {
        heading : "Up to 60% off | Styles for women " , 
        imgUrl1 : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg" , 
        imgUrl2 : "https:images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg" , 
        imgUrl3 : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg" , 
        imgUrl4 : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg" , 
        title1: "Women's clothing",
        title2: "footwear",
        title3: "watches",
        title4: "jwellery",
    }
    const card7= {
        heading : "Discover TVs by your ideal size | Starting ₹6,999 " , 
        imgUrl1 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/32._SY116_CB578871436_.jpg" , 
        imgUrl2 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/43._SY116_CB578871436_.jpg" , 
        imgUrl3 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/55._SY116_CB578871436_.jpg" , 
        imgUrl4 : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/65._SY116_CB578871436_.jpg" , 
        title1: "Budget TVs",
        title2: "4K TVs",
        title3: "Ultra HD TVs",
        title4: "Premium TVs",
    }
    const card8= {
        heading : "Automotive essentials | Up to 60% off" , 
        imgUrl1 : "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" , 
        imgUrl2 : "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" , 
        imgUrl3 : "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" , 
        imgUrl4 : "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        title1: "Cleaning accessories",
        title2: "tyer & rym",
        title3: "halmet",
        title4: "vaccum cleaner",
    }
  return (
    <>
    <div className='all_cards'>
      <ChildCard data= {card1}/>
      <ChildCard data= {card2}/>
      <ChildCard data= {card3}/>
      <ChildCard data= {card4}/>
      <ChildCard data= {card5}/>
      <ChildCard data= {card6}/>
      <ChildCard data= {card7}/>
      <ChildCard data= {card8}/>
      
      </div>
    </>
  )
}

export default ParentCard
