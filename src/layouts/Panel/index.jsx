import React from "react";
import Select from "../../components/Select";
import { background } from "../../constants/index";

export default function Panel() {
  return (
    <div className="panel">
      <div className="panel_warp">
        <div className="panel_logo">
          <h1 className="text_center">
            <a href="http://ctruh.com/" target="_blank" rel="noreferrer">
              Ctruh 3D
            </a>
          </h1>
        </div>
        <div className="panel_main">
          <Select data={background} />
        </div>
      </div>
    </div>
  );
}
