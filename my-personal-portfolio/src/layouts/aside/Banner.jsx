import React from "react";
import BannerCss from "./Banner.module.scss";
import ProfileImage from "./../../assets/profile.png";
import { FaArrowRight } from "react-icons/fa6";
import SocialIcons from "../../components/SocialIcons";

function Banner() {
  return (
    <div className={BannerCss.bannerContainer}>
      <div className={BannerCss.bannerDetails}>
        <div className={BannerCss.myBannerNameWithResume}>
          <div className={BannerCss.myBannerName}>
            <div className={BannerCss.myPronoun}>Hello I'm</div>
            <div className={BannerCss.myFirstName}>Prateek</div>
            <div className={BannerCss.myLastName}>Chaudhary</div>
          </div>
          <div className={BannerCss.myResumeBtnSection}>
            <label>Resume</label>
            <FaArrowRight />
          </div>
        </div>
        <div className={BannerCss.myBannerImage}>
          <img src={ProfileImage} alt="My Profile Picture" />
        </div>
        <div className={BannerCss.myBannerAbout}>
          <div className={BannerCss.aboutHeading}>About Me</div>
          <div className={BannerCss.aboutDetails}>
            I’m a Java Full Stack Developer specializing in backend development
            with Java (Spring Boot) and frontend development with React.js. I
            build scalable, secure, and responsive applications with clean,
            maintainable code. Currently, I’m open for freelance projects in
            frontend, backend, or full-stack development.
          </div>
          <div className={BannerCss.SocialIcons}>
            <div className={BannerCss.iconHeading}>Find me on:</div>
            < SocialIcons />
          </div>
        </div>
      </div>
      <div className={BannerCss.designation}>
        <p>FULL STACK JAVA DEVELOPER</p>
      </div>
    </div>
  );
}

export default Banner;
