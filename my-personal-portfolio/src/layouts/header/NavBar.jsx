import React from 'react';
import MyLogo from '../../components/MyLogo';

function NavBar() {
  return (
    <div>
      <div className="logoWithName">
        <MyLogo />
      </div>
      <div className="navLinks"></div>
      <div className="socialIcons"></div>
    </div>
  )
}

export default NavBar;
