/** @jsxImportSource @emotion/react */

import React, { useEffect, useState, useContext } from "react";
import { css } from "@emotion/react";

import Modal from "./Modal";
import { fetchConditionalLessons, fetchRegisteredLessons } from "../apis";
import AppContext from "../contexts/AppContext";

const Registration = () => {
  const [open, setOpen] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const { state } = useContext(AppContext);
  const userId = state.id;
  const [registeredLessons, setRegisteredLessons] = useState([]);
  console.log(userId);

  const fetchData = async (week, time) => {
    setLoading(true);

    try {
      const res = await fetchConditionalLessons(week, time);
      const lessons = res.data;
      setLessons(lessons);
    } catch {
      console.log("失敗");
    }

    setLoading(false);
  };

  const handleClick = (week, time) => {
    setOpen(true);
    fetchData(week, time);
  };

  const fetchLessons = async (userId) => {
    const res = await fetchRegisteredLessons(userId);
    const registeredLessons = res.data;

    setRegisteredLessons(registeredLessons);
    console.log(registeredLessons);
  };

  useEffect(() => {
    fetchLessons(userId);
  }, [open, userId]);

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
            {weeks.map((week, index) => (
              <td key={index} css={tdCss} onClick={() => handleClick(week, 1)}>
                {registeredLessons.map((registeredLesson) => (
                  registeredLesson.week === week &&
                  registeredLesson.time === 1 ? (
                    <p key={registeredLesson.id}>{registeredLesson.name}</p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                ))}
              </td>
            ))}
          </tr>
          <tr>
            <th>2</th>
            {weeks.map((week, index) => (
              <td
                key={index}
                css={tdCss}
                onClick={() => handleClick(week, 2)}
              >
                {registeredLessons.map((registeredLesson) => (
                  registeredLesson.week === week &&
                  registeredLesson.time === 2 ? (
                    <p key={registeredLesson.id}>{registeredLesson.name}</p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                ))}
              </td>
            ))}
          </tr>
          <tr>
            <th>3</th>
            {weeks.map((week, index) => (
              <td
                key={index}
                css={tdCss}
                onClick={() => handleClick(week, 3)}
              >
                {registeredLessons.map((registeredLesson) => (
                  registeredLesson.week === week &&
                  registeredLesson.time === 3 ? (
                    <p key={registeredLesson.id}>{registeredLesson.name}</p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                ))}
              </td>
            ))}
          </tr>
          <tr>
            <th>4</th>
            {weeks.map((week, index) => (
              <td
                key={index}
                css={tdCss}
                onClick={() => handleClick(week, 4)}
              >
                {registeredLessons.map((registeredLesson) => (
                  registeredLesson.week === week &&
                  registeredLesson.time === 4 ? (
                    <p key={registeredLesson.id}>{registeredLesson.name}</p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                ))}
              </td>
            ))}
          </tr>
          <tr>
            <th>5</th>
            {weeks.map((week, index) => (
              <td
                key={index}
                css={tdCss}
                onClick={() => handleClick(week, 5)}
              >
                {registeredLessons.map((registeredLesson) => (
                  registeredLesson.week === week &&
                  registeredLesson.time === 5 ? (
                    <p key={registeredLesson.id}>{registeredLesson.name}</p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                ))}
              </td>
            ))}
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
