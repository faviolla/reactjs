import { useRef } from "react";

const UncontrolledForm = () => {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // const name = event.target.firstName.value;
    // const email = event.target.email.value;
    console.log(formRef.current.firstName.value);
    console.log(formRef.current.email.value);
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input type="text" name="firstName" id="firstName" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default UncontrolledForm;
