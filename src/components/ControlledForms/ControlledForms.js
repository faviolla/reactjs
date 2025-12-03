import { useRef, useState } from "react";

const ControlledForms = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    checkbox: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setValue((prevState) => ({ ...prevState, name }));
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };

  const handleCheckboxChange = (event) => {
    const checkbox = event.target.checked;
    setValue((prevState) => ({ ...prevState, checkbox }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ padding: 20 }}>
          <label style={{ marginRight: 10 }} htmlFor="firstName">
            Name
          </label>
          <input value={value.name} onChange={handleNameChange} type="text" name="firstName" id="firstName" />
        </div>
        <div style={{ padding: 20 }}>
          <label style={{ marginRight: 10 }} htmlFor="email">
            Email
          </label>
          <input value={value.email} onChange={handleEmailChange} type="email" name="email" id="email" />
        </div>
        <div style={{ padding: 20 }}>
          <label style={{ marginRight: 10 }} htmlFor="checkbox">
            Checkbox
          </label>
          <input checked={value.checkbox} onChange={handleCheckboxChange} type="checkbox" name="checkbox" id="checkbox" />
        </div>
        <div style={{ padding: 20 }}>
          <button type="submit">Submit Form</button>
        </div>
      </form>
      <div>
        <p>
          firstName: <strong>{value.name}</strong>
        </p>
        <p>
          email: <strong>{value.email}</strong>
        </p>
        <p>
          checkbox: <strong>{value.checkbox.toString()}</strong>
        </p>
      </div>
    </>
  );
};

export default ControlledForms;
