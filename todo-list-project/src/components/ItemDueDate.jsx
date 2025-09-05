import { useRef } from "react";
import dueDateCss from "./ItemDueDate.module.scss";

function ItemDueDate({ setDue }) {
  let itemDue = useRef();
  let returnItemDue = () => {
    console.log(itemDue.current.value);
    setDue(itemDue.current.value);
  };

  return (
    <>
      <input
        ref={itemDue}
        onBlur={returnItemDue}
        type="date"
        name="dueBy"
        id={dueDateCss.byDate}
      />
    </>
  );
}

export default ItemDueDate;
