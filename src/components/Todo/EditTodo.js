/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import { useParams, useHistory, useLocation } from "react-router-dom";

import { updateTodo } from '../../apis';

import { innerCss } from "../Style/Layout/main";
import { pageTitleCss } from "../Style/Object/Component/title";
import { todoFormCss } from "../Style/Object/Project/todo";
import { todoButtonCss, disabledButtonBlue } from "../Style/Object/Component/button";

const EditTodo = () => {
  const location = useLocation()
  const [content, setContent] = useState(location.state.name)
  const { id } = useParams();
  const todoId = location.state.todoId
  const history = useHistory()
  
  const update = (id, todoId, userId, content) => {
    updateTodo(id, todoId, userId, content)
  }

  const handleClick = (e) => {
    e.preventDefault()

    update(id, todoId, content)

    history.goBack();
  }

  return (
    <div css={innerCss}>
      <div css={pageTitleCss}>Edit Todo</div>
      <form>
        <input
          css={todoFormCss}
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button 
          css={[todoButtonCss, !content && disabledButtonBlue]}
          onClick={handleClick}
        >
          edit
        </button>
      </form>
    </div>
  )
}

export default EditTodo
