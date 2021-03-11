/** @jsxImportSource @emotion/react */

import React, { useState, useContext } from "react";

import AppContext from "../contexts/AppContext";
import { fetchPostLesson } from "../apis";

import { 
  overlayCss,
  contentCss,
  selectedCss,
  modalListCss,
  modalInnerCss,
  modalButtonsCss
} from "./Style/Object/Project/modal";
import { pageTitleCss } from "../components/Style/Object/Component/title";
import { cancelButtonCss, selectButtonCss } from "../components/Style/Object/Component/button";

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
        <div css={overlayCss} onClick={() => setOpen(false)}>
          <div css={contentCss} onClick={(e) => e.stopPropagation()}>
            <div css={pageTitleCss}>授業一覧</div>
            <div css={modalInnerCss}>
            {loading ? (
              <h1>ローディング中・・・</h1>
              ) : (
              lessons.map((lesson) => (
                <p 
                  key={lesson.id} 
                  onClick={() => setSelected(lesson.id)}
                  css={[selected === lesson.id && selectedCss, modalListCss]}
                >
                  {lesson.name}
                </p>
              )) 
            )}
            <div css={modalButtonsCss}>
              <button
                css={cancelButtonCss}
                onClick={() => setOpen(false)}
              >
                キャンセル
              </button>
              <button
                css={selectButtonCss}
                onClick={() => handleClick()}
                >
                授業を選択する
              </button>
            </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
