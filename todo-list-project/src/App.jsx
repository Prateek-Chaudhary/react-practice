import { useState } from "react";
import "./App.scss";
import ActionButton from "./components/ActionButton";
import ItemDueDate from "./components/ItemDueDate";
import ItemName from "./components/ItemName";
import ShowItems from "./components/ShowItems";

function App() {
  let [todoDatas, setTodoDatas] = useState([]);
  let [item, setItem] = useState();
  let [due, setDue] = useState();

  let addItemToList = () => {
    let newItem = [...todoDatas, {itemName: item, ItemDue: due}];
    setTodoDatas(newItem);
  }

  let removeItem = (key) => {
    let newList = todoDatas.filter((todoData) => todoData.itemName !== key);
    setTodoDatas(newList);
  };
  
  return (
    <>
      <div className="todoSection">
        <div className="todoHeading">
          <p>TODO CREATOR</p>
        </div>
        <div className="itemAdditionContainer">
          <div className="itemName">
            <ItemName setItem={setItem} />
          </div>
          <div className="dueBy">
            <ItemDueDate setDue={setDue} />
          </div>
          <div className="additionButton">
            <ActionButton
              buttonId={"addBtn"}
              buttonName={"Add"}
              buttonCss={"greenStyle"}
              respondToItem={addItemToList}
            />
          </div>
        </div>
        <div className="itemShowContainer">
          {todoDatas.length === 0 ? (
            <div className="emptyBox">
              <p>Enter Items to the list...</p>
            </div>
          ) : (
            todoDatas.map((todoData) => {
              return (
                <ShowItems
                  key={todoData.itemName}
                  todoData={todoData}
                  removeItem={removeItem}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
