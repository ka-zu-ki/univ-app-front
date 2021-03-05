import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import { fetchLesson } from "../apis";

const Mylesson = () => {
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
  }, []);

  return (
    <>
      {loading ? (
        <h1>ローディング中</h1>
      ) : (
        <>
          <h1>シラバス</h1>
          講義名
          <p>{lesson.name}</p>
          教授
          <p>{lesson.professor}</p>
          時限
          <p>{lesson.period}</p>
          教室
          <p>{lesson.room}</p>
          講義内容
          <p>{lesson.content}</p>
        </>
      )}
    </>
  )
}

export default Mylesson
