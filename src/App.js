import { useRef } from "react";
import "./App.css";

function App() {
  const headerRef = useRef();
  console.log(headerRef);

  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        <p>Text</p>
      </header>
    </div>
  );
}

export default App;
