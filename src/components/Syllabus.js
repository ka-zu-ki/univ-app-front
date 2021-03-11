/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchLesson } from "../apis";

import { pageTitleCss, sectionTitleCss } from "../components/Style/Object/Component/title";
import { innerCss } from "../components/Style/Layout/main";
import { marginTop10Css } from "../components/Style/Object/Utility/margin";

const Syllabus = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(null);
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
  
        const res = await fetchLesson(id);
        const lesson = res.data;
        setLesson(lesson);
  
        setLoading(false);
      } catch {
        console.log("失敗");
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>ローディング中・・・</h1>
      ) : (
        <>
          <div css={innerCss}>
            <div css={pageTitleCss}>シラバス</div>
            <div css={sectionTitleCss}>講義名</div>
              <p css={marginTop10Css}>{lesson.name}</p>
            <div css={sectionTitleCss}>教授</div>
              <p css={marginTop10Css}>{lesson.professor}</p>
            <div css={sectionTitleCss}>曜日</div>
              <p css={marginTop10Css}>{lesson.week}</p>
            <div css={sectionTitleCss}>時限</div>
              <p css={marginTop10Css}>{lesson.time}</p>
            <div css={sectionTitleCss}>教室</div>
              <p css={marginTop10Css}>{lesson.room}</p>
            <div css={sectionTitleCss}>講義内容</div>
              <p css={marginTop10Css}>{lesson.content}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Syllabus;
