import React from 'react'
import '../App.css'
function SignUp() {
  return (
    <div className='formContainer'>
      <div className="formWraper">
       <div className="logo">Lema Chat</div>
        <div className="title">Register</div>
         <form>
            <input type="name" placeholder='Name'/>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="file" name="Avtar" id="" />
            <button>Register</button>
        </form>
        <p>Already an Account ? Login</p>
      </div>
    </div>
  )
}

export default SignUp