import { css } from "@emotion/react";

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
padding: 1em;
background: #fff;
opacity: 1;
`;

export const cursorCss = css`
cursor: pointer;
`

export const selectedCss = css`
background-color: #F7F7F8;
`