import { css } from "@emotion/react";
import { color } from "../_variables";

export const layoutCss = css`
  background-color: ${color.gray};
  width: 1400px;
  margin: 0 auto;
  padding-bottom: 50px;
  min-height: 800px;
`

export const innerCss = css`
  padding: 50px 140px 0 140px;
`

export const bgWhiteCss = css`
  background-color: ${color.white};
  padding: 30px 100px; 
  margin-top: 10px
`