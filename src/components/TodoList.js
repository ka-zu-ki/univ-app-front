import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import { fetchTodos } from "../apis";

const TodoList = ({ id, user_id }) => {
  const [todos, setTodos] = useState([])
  const history = useHistory()

  console.log(id)

  useEffect(() => {
    let unmounted = false

    const fetchData = async (id, user_id) => {
      const res = await fetchTodos(id, user_id)
      const todos = res.data
      
      if (!unmounted) {
        setTodos(todos)
      }
    }

    fetchData(id, user_id)

    const cleanup = () => {
      unmounted = true
    }

    return cleanup
  }, [id, user_id])

  return (
    <>
      <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.name}</li>)}
      </ul>

      <button 
        onClick={() => {
          history.push(`/mylesson/${id}/new_todo`)
        }}
      >
        Nwe Todo
      </button>
    </>
  )
}

export default TodoList
