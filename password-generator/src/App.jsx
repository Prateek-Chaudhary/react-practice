import "./App.scss";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {

  return (
    <>
      <div className="mainBox">
        <div className="heading">Password Generator</div>
        <div className="generatorBox">
          <PasswordGenerator />
        </div>
      </div>
    </>
  );
}

export default App
