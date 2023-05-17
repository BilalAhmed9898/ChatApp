import React from 'react'
import Img from '../assests/img.png'
import Attach from '../assests/attach.png'

function Input() {
  return (
    <div className='input'>
      <input type="text" className='chattext' placeholder='Type Something here...' />
      <div className="send">
        <img src={Attach} style={{width:24 ,height:34}} alt="" />
        <input type="file" style={{ display: "none" }} id='file' />
        <label htmlFor="file">
          <img src={Img} style={{width:40 ,height:34}} alt="" />
        </label>
        <button className='SendButton'>Send</button>
      </div>
    </div>
  )
}

export default Input  