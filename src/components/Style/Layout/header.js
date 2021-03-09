import { css } from "@emotion/react";
import { color } from "../_variables";

export const headerCss = css`
  height: 80px;
  width: 1400px;
  background-color: ${color.white};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const headerLeftCss = css`
  color: ${color.base};
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  margin-left: 36px;
`

export const headerRightCss = css`
  margin-right: 36px;
`

export const headerUlCss = css`
  display: flex;
  color: ${color.base};
  font-size: 14px;
`

export const headerLiCss = css`
  margin-right: 20px;
`

export const headerBorderCss = css`
  height: 1px;
  width: 1400px;
  background-color: #E4E6E7;
  margin: 0 auto;
`