const TextInputs = ({ value, setValue }) => {
  const handleNameChange = (event) => {
    const name = event.target.value;
    setValue((prevState) => ({ ...prevState, name }));
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };

  return (
    <>
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
    </>
  );
};

export default TextInputs;
