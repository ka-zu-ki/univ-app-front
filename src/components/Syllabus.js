import React from 'react'

import { fetchLesson } from '../apis'

const Syllabus = () => {
  const res = fetchLesson()
  const lesson = res.data
  
  return (
    <>
      <h1>シラバス</h1>
      <p>{lesson.name}</p>
    </>
  )
}

export default Syllabus
