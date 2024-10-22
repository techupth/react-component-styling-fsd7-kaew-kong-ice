/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  return (
    <span>
      {type === "primary" ? (
        <button
          css={css`
            width: 171.19px;
            height: 50px;
            padding: 0px 16px;
            gap: 8px;
            border-radius: 4px;
            background: #074ee8;
          `}
        >
          Button
        </button>
      ) : (
        <button
          css={css`
            width: 171.19px;
            height: 50px;
            padding: 0px 16px;
            gap: 8px;
            border-radius: 4px;
            background: #07a4e8;
          `}
        >
          Button
        </button>
      )}
    </span>
  );
}

export default Button;
