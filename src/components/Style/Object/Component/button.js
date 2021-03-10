import { css } from "@emotion/react";
import { color } from "../../_variables";

export const deleteButton = css`
  height: 29px;
  width: 90px;
  margin-top: 20px;
  border: 1px solid ${color.red};
  background-color: ${color.red};
  color: ${color.white};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${color.base};
    background-color: ${color.white2};
  }
`

export const createButton = css`
  ${deleteButton}
  border: 1px solid ${color.blue};
  background-color: ${color.blue};
`

export const createButtonLong = css`
  ${createButton}
  width: 280px;
  margin: 50px 0 0 840px;
`