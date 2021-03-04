/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css } from "@emotion/react";

import Modal from "./Modal";
import { fetchConditionalLessons } from "../apis"

const Registration = () => {
  const [open, setOpen] = useState(false);
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(false)
  const [weeks] = useState(["Mon", "Tue", "Wed", "Thu", "Fri"])

  const fetchData = async (week, time) => {
    setLoading(true)

    try {
      const res = await fetchConditionalLessons(week, time)
      const lessons = res.data 
      setLessons(lessons)
    } catch {
      console.log('失敗')
    }

    setLoading(false)
  }

  const handleClick = (week, time) => {
    setOpen(true)
    fetchData(week, time)
  }

  return (
    <>
      <h1>履修登録ページ</h1>
      <table css={tableCss}>
        <thead>
          <tr>
            <th></th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            {
              weeks.map((week, index) => (
                <td key={index} css={tdCss} onClick={() => handleClick(week, 1)}></td>
              ))
            }
          </tr>
          <tr>
            <th>2</th>
            {
              weeks.map((week, index) => (
                <td key={index} css={tdCss} onClick={() => handleClick(week, 2)}></td>
              ))
            }
          </tr>
          <tr>
            <th>3</th>
            {
              weeks.map((week, index) => (
                <td key={index} css={tdCss} onClick={() => handleClick(week, 3)}></td>
              ))
            }
          </tr>
          <tr>
            <th>4</th>
            {
              weeks.map((week, index) => (
                <td key={index} css={tdCss} onClick={() => handleClick(week, 4)}></td>
              ))
            }
          </tr>
          <tr>
            <th>5</th>
            {
              weeks.map((week, index) => (
                <td key={index} css={tdCss} onClick={() => handleClick(week, 5)}></td>
              ))
            }
          </tr>
        </tbody>
      </table>

      <button>履修登録を決定する</button>

      <Modal
        open={open}
        setOpen={setOpen}
        lessons={lessons}
        setLoading={setLoading}
        loading={loading}
      />
    </>
  );
};

export default Registration;

const tableCss = css`
  width: 800px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
`;

const tdCss = css`
  background-color: #f5f5f5;
`;
