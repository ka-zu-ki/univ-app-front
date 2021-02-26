/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

import Modal from "./Modal";
import { fetchConditionalLessons } from "../apis"

const Registration = () => {
  const [open, setOpen] = useState(false);
  const [lessons, setLessons] = useState([])
  const [week, setWeek] = useState(["Mon", "Tue", "Wed", "Thu", "Fri"])
  const [time, setTime] = useState([1, 2, 3, 4, 5])

  const fetchData = async (week, time) => {
    const res = await fetchConditionalLessons(week, time)
    const lessons = res.data
    setLessons(lessons)
  }

  const handleClick = (week, time) => {
    // setWeek(week)
    // setTime(time)
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
            <td css={tdCss} onClick={() => handleClick("Mon", 1)}>
            </td>
            <td css={tdCss}>
            </td>
            <td css={tdCss}>
            </td>
            <td css={tdCss}>
            </td>
            <td css={tdCss}>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
          </tr>
          <tr>
            <th>3</th>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
          </tr>
          <tr>
            <th>4</th>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
          </tr>
          <tr>
            <th>5</th>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
            <td css={tdCss}></td>
          </tr>
        </tbody>
      </table>

      <Modal
        open={open}
        setOpen={setOpen}
        lessons={lessons}
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
