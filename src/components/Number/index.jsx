import React from "react";

export default function Number(props) {
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
      />
    </div>
  );
}
