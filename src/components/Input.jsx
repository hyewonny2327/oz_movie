function Input({
  type,
  id,
  label,
  value,
  onChange,
  placeholder,
  errorMessage,
}) {
  function handleInputChange(e) {
    onChange(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <div>{errorMessage}</div>
    </div>
  );
}

export default Input;
