/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchLessons } from "../apis/index";

import { pageTitleCss } from "../components/Style/Object/Component/title";
import { innerCss } from "../components/Style/Layout/main";
import { 
  lessonsTableCss,
  lessonsThCss,
  lessonsTdCss,
  lessonsTrCss,
  lessonsThLeftCss,
  lessonsSellMini
} from "../components/Style/Object/Component/table";

const Lessons = () => {
  const [loading, setLoading] = useState(null);
  const [lessons, setLessons] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await fetchLessons();
      const lessons = res.data;
      setLessons(lessons);

      setLoading(false);
    } catch {
      console.log("失敗");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div css={innerCss}>
      <div css={pageTitleCss}>授業一覧</div>
      {loading ? (
        <h2>ローディング中</h2>
      ) : (
        <table css={lessonsTableCss}>
          <tr css={lessonsTrCss}>
            <th css={[lessonsThCss, lessonsThLeftCss]}>講義名</th>
            <th css={lessonsThCss}>担当教員</th>
            <th css={lessonsSellMini}>曜日</th>
            <th css={lessonsSellMini}>時限</th>
          </tr>
          {
            lessons.map((lesson) => {
              return (
                <tr css={lessonsTrCss}>
                  <Link to={`/lessons/${lesson.id}`} key={lesson.id} >
                    <td css={[lessonsTdCss, lessonsThLeftCss]}>{lesson.name}</td>
                  </Link>
                  <td css={lessonsTdCss}>{lesson.professor}</td>
                  <td css={lessonsSellMini}>{lesson.week}</td>
                  <td css={lessonsSellMini}>{lesson.time}</td>
                </tr>
              )
            })
          }
        </table>
      )
    }
    </div>
  );
};

export default Lessons;
