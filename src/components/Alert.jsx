/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../assets/frown.svg";
import check from "../assets/check-circle.svg";
import alert from "../assets/alert-circle.svg";
import triangle from "../assets/alert-triangle.svg";

function Alert() {
  return (
    <>
      <AlertBox
        background="#F9C8C8"
        message="This is error alert box"
        icon={frown}
      />
      <AlertBox
        background="#F9D9C8"
        message="This is warning alert box"
        icon={triangle}
      />
      <AlertBox
        background="#f9ebc8"
        message="This is info alert box"
        icon={alert}
      />
      <AlertBox
        background="#cef7cd"
        message="This is success alert box"
        icon={check}
      />
    </>
  );
}

export function AlertBox({ background, icon, message }) {
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        background-color: ${background};
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 15px;
        padding-left: 40px;
        margin: 20px;
      `}
    >
      <img src={icon} alt="alert-icon" />
      <p
        css={css`
          font-size: 20px;
          color: #444;
        `}
      >
        {message}
      </p>
    </div>
  );
}

export default Alert;
