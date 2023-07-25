import "./Input.css";
function Input({ required, type, placeholder, value, handleOnKeyDown }) {
  return (
    <input
      {...value}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
}

export default Input;
