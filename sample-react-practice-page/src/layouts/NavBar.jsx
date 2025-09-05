import "./NavBar.scss";
import { FiSearch } from "react-icons/fi";
import HomeLogo from "../assets/logo-smart3.png";
import { useState } from "react";

export default function NavBar() {
  let [toggleSearch, setToggleSearch] = useState(true);

  let handleSearch = () => {
    setToggleSearch((prev) => !prev);
  }

  return (
    <>
      <div className="navigation">
        <div className="sampleLogo">
          <img src={HomeLogo} width={100} alt="" />
        </div>
        <div className="navList">
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
          <div className="searchBar">
            {toggleSearch ? (
              <div className="searchButton">
                <FiSearch className="searchIcon" size={30} onClick={handleSearch} />
              </div>
            ) : (
              <div className="searchBox">
                <input
                  type="text"
                  name="search"
                  id="itemSearch"
                  placeholder="Search..."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
