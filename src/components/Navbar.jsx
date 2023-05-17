import React from 'react'
import Image from '../assests/FjU2lkcWYAgNG6d.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='username'>Bilal Ahmed</span>
      <div className="user">
        <img src={Image} alt="" />
        <span>John</span>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
