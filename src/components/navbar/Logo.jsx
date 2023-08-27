import React from 'react'
import logo from "../../assets/images/logo.png"
const Logo = () => {
  return (
    <div><img
    className="hidden md:block cursor-pointer" 
    src={logo}
    height="100" 
    width="100" 
    alt="Logo" 
  /></div>
    
  )
}

export default Logo