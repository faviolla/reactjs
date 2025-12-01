import { useRef, useState } from "react";
import PersonList from "./components/PersonList/PersonList";
import "./App.css";

function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <input type="text" ref={inputRef} />
        <p>Text</p>
        <button onClick={handleFocus}>Focus me</button> */}
        <PersonList />
      </header>
    </div>
  );
}

export default App;
