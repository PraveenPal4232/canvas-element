import React from "react";

export default function Select(props) {
  return (
    <div className="custom_select">
      <label className="custom_select_label" htmlFor={props.data.name}>
        {props.data.lable}
      </label>
      <select
        className="custom_select_input"
        name={props.data.name}
        id={props.data.name}
      >
        {props.data.options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
