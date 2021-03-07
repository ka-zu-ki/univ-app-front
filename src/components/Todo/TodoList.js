import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import { 
  fetchTodos,
  deleteTodo,
  deleteTodos,
} from "../../apis";

const TodoList = ({ id, user_id }) => {
  const [todos, setTodos] = useState([])
  const history = useHistory()

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

  const handleClickDelete = (todoId) => {
    deleteTodo(id, todoId)
    
    const newTodo = todos.filter((todo) => todo.id !== todoId)
    setTodos(newTodo)
  }

  const handleClickDeleteAll = () => {
    deleteTodos(id, user_id)

    setTodos([])
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <li>
              {todo.name}
              <button onClick={() => handleClickDelete(todo.id)}>削除</button>
              <button onClick={() => 
                history.push(`/mylesson/${id}/edit_todo`,
                { 
                  name: todo.name,
                  todoId: todo.id
                }
        )
                
              }>
                編集
              </button>
            </li>
          </React.Fragment>
        ))}
      </ul>

      <button onClick={handleClickDeleteAll}>全て削除</button>
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
