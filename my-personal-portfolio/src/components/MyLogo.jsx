import React, { useRef } from 'react';
import MyLogoCss from './_css/MyLogo.module.scss';
import MyLogoIcon from './../assets/icon.png';

function MyLogo() {

  let myNameRef = useRef();

  let onMouseMove = (e) => {
    let rect = myNameRef.current.getBoundingClientRect();
    let positionX = e.clientX - rect.left;
    let percentage = (positionX / rect.width) * 100;
    myNameRef.current.style.setProperty("--pos", `${percentage}%`);
  }

  return (
    <div className={MyLogoCss.logoContainer}>
      <div className={MyLogoCss.logo}>
        <img src={MyLogoIcon} alt="my logo" width={40} />
      </div>
      <div className={MyLogoCss.myName}>
        <label ref={myNameRef} onMouseMove={onMouseMove}>Prateek Chaudhary</label>
      </div>
    </div>
  );
}

export default MyLogo;
