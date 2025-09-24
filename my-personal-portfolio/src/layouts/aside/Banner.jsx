import React from 'react'
import BannerCss from './Banner.module.scss';

function Banner() {
  return (
    <div className={BannerCss.bannerContainer}>
      <div className={BannerCss.bannerDetails}>
        <div className={BannerCss.myBannerName}>Name</div>
        <div className={BannerCss.myBannerImage}>Image</div>
        <div className={BannerCss.myBannerAbout}>About</div>
      </div>
      <div className={BannerCss.designation}>Full Stack Java Developer</div>
    </div>
  );
}

export default Banner;
