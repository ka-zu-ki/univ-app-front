/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { 
  fetchTodos,
  updateTodo,
  deleteTodo,
  deleteTodos,
} from "../../apis";

import { pageTitleCss, sectionTitleCss } from "../../components/Style/Object/Component/title";
import { innerCss } from "../Style/Layout/main";
import { marginTop30Css } from "../../components/Style/Object/Utility/margin";
import { 
  completedTodoCss,
  unCompletedTodoCss,
  todoIconCss,
  todoCheckCss
} from "../Style/Object/Project/todo";
import { 
  deleteButton,
  createButton,
} from "../Style/Object/Component/button";

const TodoList = ({ id, user_id }) => {
  const [todos, setTodos] = useState([])
  const history = useHistory()
  const isCompleted = todos.filter((todo) => todo.is_completed)
  console.log(isCompleted)

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
    <div css={innerCss}>
      <div css={pageTitleCss}>Todo</div>
      <div css={sectionTitleCss}>未完了</div>
      {
        todos.map((todo, index) => {
          if (todo.is_completed === false) {
            return (
              <React.Fragment key={todo.id}>
                <ul>
                  <li css={marginTop30Css}>
                    <input
                      type="checkbox"
                      css={todoCheckCss}
                      value={todo}
                      onClick={() => handleClick(todo, index)}
                    />
                    <label css={unCompletedTodoCss}>{todo.name}</label>
                    <FontAwesomeIcon
                      icon={faEdit}
                      css={todoIconCss}
                      onClick={() => 
                        history.push(`/mylesson/${id}/edit_todo`,
                          { 
                            name: todo.name,
                            todoId: todo.id
                          }
                      )}
                    />
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      css={todoIconCss}
                      onClick={() => handleClickDelete(todo.id)}
                    />
                  </li>
                </ul>
              </React.Fragment>
            )
          }
        })
      }
      
      <div css={sectionTitleCss}>完了</div>
      {
        todos.map((todo, index) => {
          if (todo.is_completed !== false) {
            return (
              <React.Fragment key={todo.id}>
                <ul>
                  <li css={marginTop30Css}>
                    <input
                      type="checkbox"
                      css={todoCheckCss}
                      value={todo.name}
                      onClick={() => handleClick(todo, index)}
                      defaultChecked 
                    />
                    <label css={completedTodoCss}>{todo.name}</label>
                  </li>
                </ul>
              </React.Fragment>
            )
          }
        })
      }
      
      <button 
        css={deleteButton}
        onClick={handleClickDeleteAll}
      >
        全て削除
      </button>
      <button 
        css={createButton}
        onClick={() => {
          history.push(`/mylesson/${id}/new_todo`)
        }}
      >
        Nwe Todo
      </button>
    </div>
  )
}

export default TodoList
