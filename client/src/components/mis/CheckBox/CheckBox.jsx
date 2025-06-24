import "./CheckBox.css";

const Checkbox = ({ label, onChange, checked }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          class="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
