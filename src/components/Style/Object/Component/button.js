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

export const todoButtonCss = css`
  ${createButton}
  height: 42px;
`

export const cancelButtonCss = css`
  box-sizing: border-box;
  height: 44px;
  width: 174px;
  border: 2px solid ${color.gray2};
  border-radius: 24px;
  background-color: ${color.white};
  color: ${color.black};
  margin-right: 20px;
  cursor: pointer;
  outline: none 
`

export const selectButtonCss = css`
  box-sizing: border-box;
  height: 44px;
  width: 174px;
  border: 2px solid ${color.blue};
  border-radius: 24px;
  background-color: ${color.blue};
  color: ${color.white};
  cursor: pointer;
`

export const disabledButtonBlue = css`
  opacity: 0.5;

  &:hover {
    border: 1px solid ${color.blue};
    background-color: ${color.blue};
    color: ${color.white};
  }
`