import React from "react";
import IconsCss from './_css/SocialIcons.module.scss';
import { FaLinkedinIn, FaInstagram, FaGithub,  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function SocialIcons() {
  return (
    <>
      <div className={IconsCss.icons}>
        <div className={IconsCss.socialIcon}>
          <FaLinkedinIn className={IconsCss.social} />
        </div>
        <div className={IconsCss.socialIcon}>
          <FaInstagram className={IconsCss.social} />
        </div>
        <div className={IconsCss.socialIcon}>
          <FaGithub className={IconsCss.social} />
        </div>
        <div className={IconsCss.socialIcon}>
          <SiLeetcode className={IconsCss.social} />
        </div>
      </div>
    </>
  );
}

export default SocialIcons;
