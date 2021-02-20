import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchLessons } from "../apis/index";
// import {  } from "../reducers/lessonsReducer";

const Lessons = () => {
  const [loading, setLoading] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const lessons = await fetchLessons();
        const res = lessons.data;
        setLessons(res);

        setLoading(false);
      } catch {
        console.log("失敗");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>授業一覧ページ</h1>
      {loading ? (
        <h2>ローディング中</h2>
      ) : (
        lessons.map((lesson, index) => (
          <Link to={`/lessons/:id`} key={index}>
            <table>
              <tr>
                <th>{lesson.name}</th>
                <td>{lesson.professor}</td>
                <td>{lesson.period}</td>
              </tr>
            </table>
          </Link>
        ))
      )}
    </>
  );
};

export default Lessons;
