import React from 'react'
import "./style.css";

const Header = () => {

  const logoutFnc = () => {
    alert("You have logged out");
  };
  return (
    <div className='nav'>
      <p className='logo'>Financely.</p>
      <p className='logo link' onClick={logoutFnc}>LogOut</p>
    </div>
  )
}

export default Header;