import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  const styles = {
    containerDarkGray: { backgroundColor: "#282c34" },
    containerGray: { backgroundColor: "gray" },
  };
  const [state, setState] = useState(false);
  const changeBGColor = () => {
    setState(!state);
  };

  return (
    <div className="App">
      <header className="App-header" style={state ? styles.containerDarkGray : styles.containerGray}>
        <input type="text" ref={inputRef} />
        <p>Text</p>
        <button onClick={handleFocus}>Focus me</button>
        <br />
        <button onClick={changeBGColor}>Change BG color</button>
      </header>
    </div>
  );
}

export default App;
