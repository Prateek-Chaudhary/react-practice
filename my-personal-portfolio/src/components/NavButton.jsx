import "./_css/NavButton.scss";

function NavButton({buttonName}) {
  return (
    <>
      <div className="navBtn">
        <span className="navBtn_button">{buttonName}</span>
      </div>
    </>
  );
}

export default NavButton;