import React from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
function App() {
  return (
    <div className='app'>
      <SignUp />
      <Login />
      <Home />
    </div>
  )
}

export default App