import Icon from "../assets/icon.png";
import "./_css/MyLogo.scss";

function MyLogo() {
  return (
    <>
      <div className="logoDesign">
        <div className="logoDesign_iconBox">
          <img src={Icon} alt="My Logo" width={40} />
        </div>
        <div className="logoDesign_iconName">
          <p>Prateek Chaudhary</p>
        </div>
      </div>
    </>
  );
}

export default MyLogo;
