/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const Modal = ({ open, setOpen, lessons, td, time, week}) => {
  return (
    <>
      {open ? (
        <div css={overlayCss}>
          <div css={contentCss}>
            <p>授業一覧</p>
            {lessons.map(
              (lesson, index) =>
                lesson.week === "Mon" &&
                lesson.time === td && <p key={index}>{lesson.name}</p>
            )}
            <button onClick={() => setOpen(false)}>授業を選択する</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;

const overlayCss = css`
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

const contentCss = css`
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
  opacity: 1;
`;
