import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import "./_css/SocialIcon.scss";

function SocialIcons() {
  return (
    <>
      <div className="socialIcons">
        <div className="instagram social">
          <div className="socialIcon">
            <BsInstagram />
          </div>
        </div>
        <div className="linkedin social">
          <div className="socialIcon">
            <FaLinkedinIn />
          </div>
        </div>
        <div className="leetcode social">
          <div className="socialIcon">
            <SiLeetcode />
          </div>
        </div>
        <div className="github social">
          <div className="socialIcon">
            <FaGithubAlt />
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialIcons;
