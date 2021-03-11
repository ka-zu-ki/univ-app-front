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
  cursor: pointer;
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

export const lessonsTableCss = css`
  width: 1120px;
  margin-top: 50px;
  border: 1px ${color.black} solid
`

export const lessonsThCss = css`
  width: 35%;
  height: 50px;
  text-align: left;
  vertical-align: middle;
`

export const lessonsThLeftCss = css`
  padding-left: 30px;
`

export const lessonsTdCss = css`
  width: 35%;
  height: 40px;
  text-align: left;
  vertical-align: middle;
`

export const lessonsTrCss = css`
  border-bottom: 1px ${color.black} solid;
`

export const lessonsSellMini = css`
  width: 15%;
  height: 30px;
  text-align: left;
  vertical-align: middle;
`