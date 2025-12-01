import { useState } from "react";
import PersonListItem from "../PersonListItem/PersonListItem";

const PersonList = () => {
  const personList = [{ title: "1" }, { title: "2" }];
  const styles = {
    containerDarkGray: { color: "green" },
    containerGray: { color: "gray" },
  };
  const [state, setState] = useState(false);
  const changeColor = () => {
    setState(!state);
  };
  return (
    <div style={state ? styles.containerDarkGray : styles.containerGray}>
      <p>Person List</p>
      {personList.map((item, index) => (
        <PersonListItem key={index} title={item.title} />
      ))}
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default PersonList;
