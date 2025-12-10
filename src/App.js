import { useEffect, useState } from "react";
// import PersonList from "./components/PersonList/PersonList";
// import UncontrolledForm from "./components/UncontrolledForms/UncontrolledForm";
// import ControlledForms from "./components/ControlledForms/ControlledForms";
import { getContactsList } from "./api/api";
import "./App.css";
import Loader from "./components/Loader/Loader";

function App() {
  // const inputRef = useRef();

  // const handleFocus = () => {
  //   inputRef.current.focus();
  //   console.log(inputRef.current.value);
  // };

  // }
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await getContactsList();
    setIsLoading(false);
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
          {isLoading ? (
            <Loader />
          ) : (
            contacts.map((contact) => (
              <li key={contact.id}>
                {contact.name} {contact.lastName}
              </li>
            ))
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
