import actionButtonCss from "./ActionButton.module.scss";

function ActionButton({ buttonName, buttonId, buttonCss, respondToItem }) {
  return (
    <>
      <button 
        id={buttonId} 
        className={actionButtonCss[buttonCss]}
        onClick={() => respondToItem()}
      >
        {buttonName}
      </button>
    </>
  );
}

export default ActionButton;
