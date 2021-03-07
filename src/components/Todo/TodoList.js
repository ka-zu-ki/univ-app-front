import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import { 
  fetchTodos,
  updateTodo,
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

  const handleClick = async (todo, index) => {
    const is_completed = !todo.is_completed
    const res = await updateTodo(id, todo.id, todo.name, is_completed)

    const newTodos = [...todos]
    newTodos[index].is_completed = res.data.is_completed
    setTodos(newTodos)
  }

  return (
    <>
      <h3>未完了</h3>
      {
        todos.map((todo, index) => {
          if (todo.is_completed === false) {
            return (
              <React.Fragment key={todo.id}>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      value={todo}
                      onClick={() => handleClick(todo, index)}
                    />
                    <label>{todo.name}</label>
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
                </ul>
              </React.Fragment>
            )
          }
        })
      }

      <h3>完了</h3>
      {
        todos.map((todo, index) => {
          if (todo.is_completed !== false) {
            return (
              <React.Fragment key={todo.id}>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      value={todo.name}
                      onClick={() => handleClick(todo, index)}
                    />
                    <label>{todo.name}</label>
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
                </ul>
              </React.Fragment>
            )
          }
        })
      }
      
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
