import { useRef } from "react";
import itemCss from "./ItemName.module.scss";

function ItemName({setItem}) {

  let itemName = useRef();
  let returnItem = () => {
    setItem(itemName.current.value);
  }

  return (
    <>
      <input
        ref={itemName}
        onBlur={returnItem}
        type="text"
        name="itemName"
        id={itemCss.itemName}
        placeholder="Enter item name...."
      />
    </>
  );
}

export default ItemName;
