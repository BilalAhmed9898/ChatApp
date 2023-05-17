import React from 'react'
import '../App.css'
function Login() {
  return (
    <div className='formContainer'>
      <div className="formWraper">
       <div className="logo">Lema Chat</div>
        <div className="title">Login</div>
         <form>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
        </form>
        <p>Already an Account ?  Register</p>
      </div>
    </div>
  )
}

export default Login