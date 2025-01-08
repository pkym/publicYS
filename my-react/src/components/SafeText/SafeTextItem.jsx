import React, { useEffect } from "react";
import DropDownList from "../util/DropDownList";

export default function SafeTextItem({ props }) {
  useEffect(() => {
    console.log(props.RCPTN_RGN_NM.length);
  }, []);

  return (
    <>
      <li className="text-item">
        <div className="text-item-header">
          <span className="text-type">{props.EMRG_STEP_NM}문자</span>
          <span className="text-date">{props.CRT_DT}</span>
        </div>
        <div className="text-item-content">
          <p>{props.MSG_CN}</p>
          <p className="sm">수신지역: {props.RCPTN_RGN_NM}</p>
        </div>
      </li>
    </>
  );
}
