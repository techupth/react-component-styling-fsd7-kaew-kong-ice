/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

let primaryButton = "#074EE8";
let secondaryButton = "#07A4E8";

function Button({ color, title }) {
  let backgroundColor = color === "primary" ? primaryButton : secondaryButton;
  return (
    <>
    <div css={css`
     displays: flex;
     flex-direction: row;
     align-items: center;
     gap: 20px;
     height: 80px;`}>
      <button
        css={css`
          padding-left: 80px;
          padding-right: 90px;
          color: white;
          text-align: center;
          background: ${backgroundColor};
        `}
      >
        {title}
      </button>
      </div>
    </>
  );
}

export default Button;
