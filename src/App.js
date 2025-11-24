import { useEffect, useState } from "react";
import UnmountComponent from "./UnmountComponent";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

   // useEffect(() => {
  //   console.log("ComponentDidMount useEffect");
  // }, []);

  // useEffect(() => {
  //   console.log("ComponentDidUpdate useEffect");
  // }, [value]);

  const handleClick = () => {
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    // setIsMounted(!isMounted);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>{value}</p>
        {/* {isMounted ? <UnmountComponent /> : <p>Text</p>} */}
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
