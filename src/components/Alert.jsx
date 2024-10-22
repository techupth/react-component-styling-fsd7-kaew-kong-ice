/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ErrorAlertBox from "../assets/frown.svg";
import InfoAlertBox from "../assets/alert-circle.svg";
import SuccessAlertBox from "../assets/check-circle.svg";
import WarningAlertBox from "../assets/alert-triangle.svg";

function Alert({text}) {
  const colors = ["#F9C8C8","#F9D9C8","#F9EBC8","#CEF7CD"]
  let display;
  let selectColor = colors;

    if  (text === "error") {
        selectColor = colors[0];
        display = ErrorAlertBox;
    } else if (text === "warning"){
        selectColor = colors[1];
        display = WarningAlertBox;
    } else if (text === "info") {
        selectColor = colors[2] 
        display = InfoAlertBox;
    } else if (text ==="success") {
        selectColor = colors[3];
        display = SuccessAlertBox;
    }


  return (
    <div css={css`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-center: center
     width: 800px;
     height: 100px;
    `}>    
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        width: 650px;
        height: 76px;
        top: 251px;
        left: 118px;
        border-radius: 10px;
        font-size: Large;
        font-weight: bold;
        text-align: center;
        color: #444444;
        border: solid;
        background: ${selectColor};`}>
      <img src={display}  css={css`margin : 20px`} alt="" />
      <p> This is {text} alert box </p>
    </div>
    </div>
  );
}

export default Alert;
