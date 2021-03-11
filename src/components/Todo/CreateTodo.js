/** @jsxImportSource @emotion/react */

import React, { useContext, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";

import { postTodo } from "../../apis";
import AppContext from "../../contexts/AppContext";

import { innerCss } from "../Style/Layout/main";
import { pageTitleCss } from "../Style/Object/Component/title";
import { todoFormCss } from "../Style/Object/Project/todo";
import { todoButtonCss, disabledButtonBlue } from "../Style/Object/Component/button";

const CreateTodo = () => {
  const [content, setContent] = useState('')
  const { state } = useContext(AppContext);
  const { id } = useParams();
  const userId = state.id;
  const history = useHistory()
  
  const postNewTodo = async (id, userId, content) => {
    await postTodo(id, userId, content)
  }

  const handleClick = (e) => {
    e.preventDefault()

    postNewTodo(id, userId, content)

    history.goBack();
  }
  
  return (
    <div css={innerCss}>
      <div css={pageTitleCss}>New Todo</div>
      <form>
        <input 
          css={todoFormCss}
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          />
        <button
          css={[todoButtonCss, !content && disabledButtonBlue]}
          disabled={!content}
          onClick={handleClick}
        >
          create
        </button>
      </form>
    </div>
  )
}

export default CreateTodo
