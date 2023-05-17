import React, { useState } from 'react'

function Search() {
  const [data,setData]= useState('')

   const clear =()=>{
      setData('')
   }
   console.log(data)
  return (
    <div className='search'>
      <div className='searchform'>
        <input type="text" className='searchbarform' value={data} placeholder='Find a User' onChange={(e)=>{setData(e.target.value)}} />
      </div>
      <span className='clear' onClick={clear}>X</span>
    </div>
  )
}

export default Search