import React from 'react';
import MyLogo from '../../components/MyLogo';
import NavLinks from './../../components/NavLinks';
import NavBarCss from './Navbar.module.scss';

function NavBar() {
  return (
    <div className={NavBarCss.navBar}>
      <div className={NavBarCss.logoWithName}>
        <MyLogo />
      </div>
      <div className={NavBarCss.navLinks}>
        <NavLinks />
      </div>
      <div className={NavBarCss.aboutSummary}>
        <div className={NavBarCss.hamburger}>
          <div className={NavBarCss.line} id={NavBarCss.line1}></div>
          <div className={NavBarCss.line} id={NavBarCss.line2}></div>
          <div className={NavBarCss.line} id={NavBarCss.line3}></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
