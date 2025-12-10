import { useEffect, useState } from "react";
// import { getContactsList } from "./api/api";
import "./App.css";
import Loader from "./components/Loader/Loader";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data: contacts, isLoading, error } = useFetch("contacts");

  if (error) {
    return <div>something went wrong {error}</div>;
  }

  return (
    <div className="App">
      <h1>Contacts</h1>
      <header className="App-header">
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
