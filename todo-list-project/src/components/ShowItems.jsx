import showItemsCss from "./ShowItems.module.scss";
import ActionButton from './ActionButton';

function ShowItems({ todoData, removeItem }) {
  let removeItemFromList = (key) => {
    removeItem(key);
  };

  return (
    <>
      <div className={showItemsCss.allItems}>
        <div className="itemNameShowBox">
          <p>{todoData.itemName}</p>
        </div>
        <div className="itemDueShowBox">
          <p>{todoData.ItemDue}</p>
        </div>
        <div className="itemActionBtn">
          <ActionButton
            buttonId={"deleteBtn"}
            buttonName={"Delete"}
            buttonCss={"redStyle"}
            respondToItem={() => removeItemFromList(todoData.itemName)}
          />
        </div>
      </div>
    </>
  );
}

export default ShowItems;