import { css } from "@emotion/react";
import { color } from "../../_variables";

export const overlayCss = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const contentCss = css`
  z-index: 2;
  width: 50%;
  height: 50%;
  padding: 30px 0 0 30px;
  background: #fff;
  opacity: 1;
`;

export const modalListCss = css`
  cursor: pointer;
  height: 30px;
  margin-top: 20px;
  line-height: 30px;
`

export const selectedCss = css`
  background-color: ${color.gray};
`

export const modalInnerCss = css`
  padding: 20px 50px 20px 20px;
`

export const modalButtonsCss = css`
  text-align: center;
  margin-top: 50px;
`

export const modalContainerCss = css`
  width: 500px;
  height: 250px;
  margin: 0 auto;
  overflow: auto;
`