import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom";

import { fetchRegisteredLesson } from "../apis";
import AppContext from "../contexts/AppContext";
import TodoList from './Todo/TodoList';


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
        <h1>ローディング中</h1>
      ) : (
        <>
          <h1>シラバス(Mylesson)</h1>
          講義名
          <p>{lesson.name}</p>
          教授
          <p>{lesson.professor}</p>
          時限
          <p>{lesson.week}{lesson.time}</p>
          教室
          <p>{lesson.room}</p>

          <h2>Todo List</h2>
            <TodoList id={id} user_id={userId}/>
        </>
      )}
    </>
  )
}

export default Mylesson
