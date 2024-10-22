/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  return (
    <div>
      {type === "primary" ? (
        <button
          css={css`
            width: 171.19px px;
            height: 50px px;
            top: 291px;
            left: 278.92px;
            padding: 0px 16px 0px 16px;
            gap: 8px;
            border-radius: 4px;
            opacity: 0px;
            background: #074ee8;
          `}
        >
          Button
        </button>
      ) : (
        <button
          css={css`
            width: 171.19px px;
            height: 50px px;
            top: 291px;
            left: 278.92px;
            padding: 0px 16px 0px 16px;
            gap: 8px;
            border-radius: 4px;
            opacity: 0px;
            background: #07a4e8;
          `}
        >
          Button
        </button>
      )}
    </div>
  );
}

export default Button;
