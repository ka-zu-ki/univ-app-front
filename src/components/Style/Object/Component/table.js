import { css } from "@emotion/react";
import { color } from "../../_variables";

export const tableCss = css`
  margin: 0 auto;
  margin-top: 50px;
  border:1px ${color.black} solid;
`;

export const tdCss = css`
  background-color: ${color.gray};
  vertical-align: middle;
  text-align: center;
  width: 200px;
  height: 150px;
  border: 1px ${color.black} solid;
`;

export const thTimeCss = css`
  vertical-align: middle;
  width: 30px;
  border: 1px ${color.black} solid;
`

export const thWeekCss = css`
  vertical-align: middle;
  height: 30px;
  border: 1px ${color.black} solid;
`