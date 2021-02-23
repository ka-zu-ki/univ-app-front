/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css } from "@emotion/react";

import Modal from "./Modal";

const Registration = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>履修登録ページ</h1>
      <table css={tableCss}>
        <thead>
          <tr>
            <th></th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td css={tdCss} onClick={() => setOpen(true)}>
            </td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
          </tr>
          <tr>
            <th>2</th>
          </tr>
          <tr>
            <th>3</th>
          </tr>
          <tr>
            <th>4</th>
          </tr>
          <tr>
            <th>5</th>
          </tr>
        </tbody>
      </table>

      <Modal open={open} setOpen={setOpen} /> 
    </>
  );
};

export default Registration;

const tableCss = css`
  width: 800px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
`;

const tdCss = css`
  background-color: #f5f5f5;
`;
