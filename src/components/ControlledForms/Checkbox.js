const Checkbox = ({ value, setValue }) => {
  const handleCheckboxChange = (event) => {
    const checkbox = event.target.checked;
    setValue((prevState) => ({ ...prevState, checkbox }));
  };

  return (
    <div style={{ padding: 20 }}>
      <label style={{ marginRight: 10 }} htmlFor="checkbox">
        Checkbox
      </label>
      <input checked={value.checkbox} onChange={handleCheckboxChange} type="checkbox" name="checkbox" id="checkbox" />
    </div>
  );
};

export default Checkbox;
