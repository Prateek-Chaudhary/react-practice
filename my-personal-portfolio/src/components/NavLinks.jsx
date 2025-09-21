import React from "react";
import NavLinkCss from "./_css/NavLinks.module.scss";
import { Link, NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className={NavLinkCss.linksContainer}>
      <ul className={NavLinkCss.navigationLinks}>
        <li>
          <Link to={"#"} className={NavLinkCss.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"#"} className={NavLinkCss.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link to={"#"} className={NavLinkCss.navLink}>
            Services
          </Link>
        </li>
        <li>
          <Link to={"#"} className={NavLinkCss.navLink}>
            Projects
          </Link>
        </li>
        <li>
          <Link to={"#"} className={NavLinkCss.navLink}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to={"#"} className={NavLinkCss.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
