import React from 'react';
import NavBar from './NavBar';
import HeaderCss from './Header.module.scss';

function Header() {
  return (
    <div className={HeaderCss.navBarContainerBox}>
      <NavBar />
    </div>
  );
}

export default Header;
