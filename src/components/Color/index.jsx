import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainState, updateColor } from "../../store/mainSlice";

export default function Color(props) {
  const { color } = useSelector(mainState);
  const dispatch = useDispatch();
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
        value={color}
        onChange={(e) => dispatch(updateColor(e.target.value))}
      />
    </div>
  );
}
