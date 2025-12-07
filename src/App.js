import { useRef, useEffect, useState } from "react";
import PersonList from "./components/PersonList/PersonList";
// import UncontrolledForm from "./components/UncontrolledForms/UncontrolledForm";
import ControlledForms from "./components/ControlledForms/ControlledForms";
import { getContactsList } from "./api/api";
import "./App.css";

function App() {
  // const inputRef = useRef();

  // const handleFocus = () => {
  //   inputRef.current.focus();
  //   console.log(inputRef.current.value);
  // };

  // }
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    const data = await getContactsList();
    setContacts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(contacts);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
        {/* <input type="text" ref={inputRef} />
        <p>Text</p>
        <button onClick={handleFocus}>Focus me</button> */}
        {/* <PersonList /> */}

        {/* <UncontrolledForm /> */}
        {/* <ControlledForms /> */}
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} {contact.lastName}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
