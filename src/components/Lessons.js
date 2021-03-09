import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchLessons } from "../apis/index";

import { pageTitleCss } from "../components/Style/Object/Component/title";
import { innerCss } from "../components/Style/Layout/main";

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
      <div css={pageTitleCss}>授業一覧ページ</div>
      {loading ? (
        <h2>ローディング中</h2>
      ) : (
        lessons.map((lesson, index) => (
          <Link to={`/lessons/${lesson.id}`} key={index}>
            <table>
              <tbody>
                <tr>
                  <th>{lesson.name}</th>
                  <td>{lesson.professor}</td>
                  <td>{lesson.period}</td>
                </tr>
              </tbody>
            </table>
          </Link>
        ))
      )}
    </div>
  );
};

export default Lessons;
