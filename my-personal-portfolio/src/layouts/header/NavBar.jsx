import Hamburger from "../../components/Hamburger";
import SocialIcons from "../../components/SocialIcons";
import MyLogo from "./../../components/MyLogo";
import NavButton from "./../../components/NavButton";

function NavBar() {

  let menuButtons = ["Home", "About Me", "Services", "Projects", "Contact Us"];

  return (
    <>
      <div className="navigation">
        <MyLogo />
      </div>
    </>
  );
}

export default NavBar;
