import { css } from "@emotion/react";
import { color } from "../../_variables";

export const pageTitleCss = css`
  color: ${color.black};
  font-size: 27px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 40px;
`

export const sectionTitleCss = css`
  ${pageTitleCss}
  font-size: 20px;
  margin-top: 30px;
`

