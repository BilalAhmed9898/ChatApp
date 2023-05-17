import React from 'react'
import Image from '../assests/FjU2lkcWYAgNG6d.jpg'
const Message = () => {
  return (
    <div className='message '>
      <div className="messageinfo">
        <img src={Image} alt="" />
        <span>Just Now</span>
        </div>
        <div className="messageContent">
        <p>hello</p>
        <img src={Image} style={{width:"50%" , height:"50%" , borderRadius:10}} alt="" />
       </div>
    </div>
  )
}

export default Message
