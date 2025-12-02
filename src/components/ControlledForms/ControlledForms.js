import { useRef, useState } from "react";

const ControlledForms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name</label>
        <input onChange={handleNameChange} type="text" name="firstName" id="firstName" />
        <label htmlFor="email">Email</label>
        <input onChange={handleEmailChange} type="email" name="email" id="email" />
        <button type="submit">Submit Form</button>
      </form>
      <div>
        <p>firstName: {name}</p>
        <p>email: {email}</p>
      </div>
    </>
  );
};

export default ControlledForms;
