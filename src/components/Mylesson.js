/** @jsxImportSource @emotion/react */

import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom";

import { fetchRegisteredLesson } from "../apis";
import AppContext from "../contexts/AppContext";
import TodoList from './Todo/TodoList';

import { pageTitleCss, sectionTitleCss } from "../components/Style/Object/Component/title";
import { innerCss } from "../components/Style/Layout/main";
import { marginTop10Css } from "../components/Style/Object/Utility/margin";

const Mylesson = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(null);
  const [lesson, setLesson] = useState([]);
  const { state } = useContext(AppContext);
  const userId = state.id;

  useEffect(() => {
    let unmounted = false

    const fetchData = async () => {  
      try {
        setLoading(true);

        const res = await fetchRegisteredLesson(id, userId);
        const lesson = res.data;

        if (!unmounted) {
          setLesson(lesson);
        }

        setLoading(false);
      } catch {
        console.log("失敗");
      }
    };

    fetchData();

    const cleanup = () => {
      unmounted = true
    }

    return cleanup
  }, [id, userId]);

  return (
    <>
      {loading ? (
        <h1>ローディング中・・・</h1>
      ) : (
        <>
          <div css={innerCss}>
            <div css={pageTitleCss}>{lesson.week}{lesson.time}限</div>
            <div css={sectionTitleCss}>講義名</div>
            <p css={marginTop10Css}>{lesson.name}</p>
            <div css={sectionTitleCss}>教授</div>
            <p css={marginTop10Css}>{lesson.professor}</p>
            <div css={sectionTitleCss}>時限</div>
            <p css={marginTop10Css}>{lesson.week}{lesson.time}</p>
            <div css={sectionTitleCss}>教室</div>
            <p css={marginTop10Css}>{lesson.room}</p>
          </div>
          <TodoList id={id} user_id={userId}/>
        </>
      )}
    </>
  )
}

export default Mylesson
