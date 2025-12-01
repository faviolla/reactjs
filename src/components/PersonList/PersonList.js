import { useState } from "react";
import PersonListItem from "../PersonListItem/PersonListItem";
import classNames from "classnames";
import "./PersonList.css";

const PersonList = () => {
  const personList = [{ title: "1" }, { title: "2" }];
  const [state, setState] = useState(false);
  const changeColor = () => {
    setState(!state);
  };
  return (
    <div className={classNames("container", { containerGray: state })}>
      <p>Person List</p>
      {personList.map((item, index) => (
        <PersonListItem key={index} title={item.title} />
      ))}
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default PersonList;
