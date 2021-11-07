function CheckBoxInput(props) {
  return (
    <li>
      <input
        key={props.id}
        onChange={props.onChange}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />
      {props.value}
    </li>
  );
}

export default CheckBoxInput;
