import React from 'react'
import './Card.css'
function ChildCard(props) {
  return (
    <>
      <div className='outer_card'>
       <div className='heading_card'><h5>{props.data.heading}</h5></div>
       <div className='inner_card'>
        <div className='col_first'>
          <img src = {props.data.imgUrl1} />
          <p>{props.data.title1}</p>
        </div>
        <div className='col_sec'>
        <img src = {props.data.imgUrl2} />
        <p>{props.data.title2}</p>
        </div>
        <div className='col_third'>
        <img src = {props.data.imgUrl3} />
        <p>{props.data.title3}</p>
        </div>
        <div className='col_fourth'>
        <img src = {props.data.imgUrl4} />
        <p>{props.data.title4}</p>
        </div>
       </div>

      </div>
    </>
  )
}

export default ChildCard
