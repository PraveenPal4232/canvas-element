import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainState, updateNumber } from "../../store/mainSlice";

export default function Number(props) {
  const { number } = useSelector(mainState);
  const dispatch = useDispatch();
  return (
    <div className="custom_number">
      <label className="custom_number_label" htmlFor="number">
        Number
      </label>
      <input
        className="custom_number_imput"
        type="number"
        id="number"
        name="number"
        min="10"
        max="99"
        value={number}
        onChange={(e) => dispatch(updateNumber(e.target.value))}
      />
    </div>
  );
}
