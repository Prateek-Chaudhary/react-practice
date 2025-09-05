import "./_css/Hamburger.scss";

function Hamburger() {
  return (
    <>
      <div className="burger">
        <div className="burger_border">
          <div className="burgerLines line1"></div>
          <div className="burgerLines line2"></div>
          <div className="burgerLines line3"></div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;