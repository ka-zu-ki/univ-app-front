import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import { fetchLessons } from "../apis/index";

const Lessons = () => {
  useEffect(() => {
    fetchLessons()
  }, [])

  return (
    <>
      <h1>授業一覧ページ</h1>
    </>
  )
}

export default Lessons
