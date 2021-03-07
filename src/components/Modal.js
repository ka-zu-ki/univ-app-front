/** @jsxImportSource @emotion/react */

import React, { useState, useContext } from "react";

import AppContext from "../contexts/AppContext";
import { fetchPostLesson } from "../apis";

import { 
  overlayCss,
  contentCss,
  cursorCss,
  selectedCss
} from "./Style/Object/Project/modal";

const Modal = ({ open, setOpen, lessons, loading }) => {
  const [selected, setSelected] = useState([])
  const {state } = useContext(AppContext)
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
