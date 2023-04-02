import React from "react";

export default function Color(props) {
  return (
    <div className="custom_color">
      <label className="custom_color_label" htmlFor="color">
        Color
      </label>
      <input
        className="custom_color_input"
        type="color"
        id="color"
        name="color"
        value="#e66465"
      />
    </div>
  );
}
