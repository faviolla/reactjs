import { useRef, useState } from "react";
import InputData from "./InputData";
import Checkbox from "./Checkbox";
import TextInputs from "./TextInputs";
import RadioButtons from "./RadioButtons";
import CustomSelect from "./CustomSelect";

const ControlledForms = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    checkbox: false,
    radio: "radio2",
    select: "option 2",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <TextInputs value={value} setValue={setValue} />
        <Checkbox value={value} setValue={setValue} />
        <RadioButtons value={value} setValue={setValue} />
        <CustomSelect value={value} setValue={setValue} />
        <div style={{ padding: 20 }}>
          <button type="submit">Submit Form</button>
        </div>
      </form>
      <InputData value={value} />
    </>
  );
};

export default ControlledForms;
