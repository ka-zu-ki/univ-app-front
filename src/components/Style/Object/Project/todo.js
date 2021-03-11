import { css } from "@emotion/react";

export const completedTodoCss = css`
  opacity: 0.3;
  font-size: 18px;
`

export const unCompletedTodoCss = css`
  font-size: 18px;
`

export const todoIconCss = css`
  margin-left: 10px;
  cursor: pointer;
`

export const todoCheckCss = css`
  margin-right: 10px;
`

export const todoFormCss = css`
  box-sizing: border-box;
  height: 42px;
  width: 422px;
  border: 2px solid #CED4DA;
  border-radius: 4px;
  background-color: #F8F9FA;
  margin-right: 10px;
  
  &:hover {
    border: 2px solid #868E96;
    border-radius: 4px;
    background-color: #F8F9FA;
    cursor: pointer;
  }
`