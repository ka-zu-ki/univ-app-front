/** @jsxImportSource @emotion/react */

import React, { useState, useContext } from "react";
import { css } from "@emotion/react";

import AppContext from "../contexts/AppContext";
import { fetchPostLesson } from "../apis";

const Modal = ({ open, setOpen, lessons, loading }) => {
  const [selected, setSelected] = useState([])
  const {state, dispatch } = useContext(AppContext)
  console.log(selected)
  console.log(state.id)

  const postDate = async (selectedLessonId, userId) => {
    const res = await fetchPostLesson(selectedLessonId, userId)
    const registeredLesson = res.data
    console.log(registeredLesson)
  }
  
  const handleClick = () => {
    const selectedLessonId = selected
    const userId = state.id
    
    postDate(selectedLessonId, userId)
    setOpen(false)
  }

  return (
    <>
      {open ? (
        <div css={overlayCss}>
          <div css={contentCss}>
            <p>授業一覧</p>
            {loading ? (
              <p>ローディング中・・・</p>
              ) : (
              lessons.map((lesson) => (
                <p 
                  key={lesson.id} 
                  onClick={() => setSelected(lesson.id)}
                  css={[selected === lesson.id && selectedCss, cursorCss]}
                >
                  {lesson.name}
                </p>
              )) 
            )}
            <button onClick={() => setOpen(false)}>キャンセル</button>
            <button onClick={() => handleClick()}>授業を選択する</button>
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

const cursorCss = css`
  cursor: pointer;
`

const selectedCss = css`
  background-color: #F7F7F8;
`
