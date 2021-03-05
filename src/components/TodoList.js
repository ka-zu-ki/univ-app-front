import React, { useEffect, useState } from 'react'

import { fetchTodos } from "../apis";

const TodoList = ({ myclass_id, user_id }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchTodos(myclass_id, user_id)
      const todos = res.data
      
      setTodos(todos)
    }

    fetchData()
  }, [])

  return (
    <>
      <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.name}</li>)}
      </ul>
    </>
  )
}

export default TodoList
