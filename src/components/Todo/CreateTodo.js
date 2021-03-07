import React, { useContext, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";

import { postTodo } from "../../apis";
import AppContext from "../../contexts/AppContext";

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
    <>
      <h1>New Todo</h1>

      <form>
        <input 
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button onClick={handleClick}>create</button>
      </form>
    </>
  )
}

export default CreateTodo
