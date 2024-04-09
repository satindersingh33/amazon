import React from 'react';
import './Deal.css';

function Deals() {
  return (
    <>

    <div className='all-deal-card'>
      <div className='new_outer_card'>
        <div className='new_heading_card'><h5>Sample HeadingUnder ₹499 | Pocket-friendly fashion
</h5></div>
        <div className='new_inner_card'>
          <div className='new_col_first'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-186-116._SY116_CB636055991_.jpg" alt="Image 1" />
            <p>Clothing</p>
          </div>
          <div className='new_col_sec'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg" alt="Image 2" />
            <p>Bagpack</p>
          </div>
          <div className='new_col_third'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg" alt="Image 3" />
            <p>Footwear</p>
          </div>
          <div className='new_col_fourth'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg" alt="Image 4" />
            <p>View all</p>
            <div className='offer'>See all offer</div>
          </div>
        </div>
      </div>



      {/* sec card */}
      <div className='new_outer_card'>
        <div className='new_heading_card'><h5>Customers’ Most-Loved Fashion for you
</h5></div>
        <div className='new_inner_card'>
          <div className='new_col_first'>
            <img src="https://m.media-amazon.com/images/I/616iBhe2roL._AC_SY145_.jpg" alt="Image 1" />
            
          </div>
          <div className='new_col_sec'>
            <img src="https://m.media-amazon.com/images/I/61N9KZKj78L._AC_SY145_.jpg" alt="Image 2" />
          </div>
          <div className='new_col_third'>
            <img src="https://m.media-amazon.com/images/I/61dtCfEcB+L._AC_SY145_.jpg" alt="Image 3" />
          </div>
          <div className='new_col_fourth'>
            <img src="https://m.media-amazon.com/images/I/51RD---L3nL._AC_SY145_.jpg" alt="Image 4" />
            <div className='offer'>See all offer</div>
          </div>
        </div>
      </div>


      {/* 3rd sec */}
      <div className='new_outer_card'>
        <div className='new_heading_card'><h5>Bestsellers in Women's Indian Clothing
</h5></div>
        <div className='new_inner_card'>
          <div className='new_col_first'>
            <img src="https://m.media-amazon.com/images/I/71BLkd39VKL._AC_SY170_.jpg" alt="Image 1" />
            
          </div>
          <div className='new_col_sec'>
            <img src="https://m.media-amazon.com/images/I/61SgADmAyDL._AC_SY170_.jpg" alt="Image 2" />
          </div>
          <div className='new_col_third'>
            <img src="https://m.media-amazon.com/images/I/51EP887WiRL._SY879_.jpg" alt="Image 3" />
          </div>
          <div className='new_col_fourth'>
            <img src="https://m.media-amazon.com/images/I/71gSvhLIJZL._AC_SY170_.jpg" alt="Image 4" />
            <div className='offer'>See all offer</div>
          </div>
        </div>
      </div>

      {/* 4th card */}
<div className='new_outer_card'>
<div className='new_heading_card'><h5>Hustlers: Jugaad ka khel | Watch only on miniTV
</h5></div>
<div className='new_inner_card'>
    <img src = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Hustlers/PC_CC/DeskCC-379x304_V1._SY304_CB582438464_.jpg"/>
    </div>
    <div className='offer'>miniTV
Watch more FREE content | only on miniTV</div>
</div>
</div>
    </>
  );
}

export default Deals;
