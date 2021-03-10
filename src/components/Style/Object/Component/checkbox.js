import { css } from "@emotion/react";

export const checkboxCss = css`
  // input[type="checkbox] {
  //   display: none;
  // }
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  padding: 5px 30px;
  position: relative;
  width: auto;
  // display: none;

  &:before {
    background: #fff;
    border: 1px solid #231815;
    content: '';
    display: block;
    height: 16px;
    left: 5px;
    margin-top: -8px;
    position: absolute;
    top: 50%;
    width: 16px;
  }
`