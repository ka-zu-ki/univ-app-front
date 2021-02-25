/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

import Modal from "./Modal";
import { fetchLessons } from "../apis";

const Registration = () => {
  const [open, setOpen] = useState(false);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchLessons();
        const lessons = res.data;

        setLessons(lessons);
      } catch {
        console.log("失敗");
      }
    };

    fetchData();
  }, []);

  // const weeks = ["月", "火", "水", "木", "金"];
  // const times = [1, 2, 3, 4, 5];
  // const tds = [1, 2, 3, 4, 5];

  // const [timeTables, setTimeTables] = useState({
  //   Mon: [1, 2, 3, 4, 5],
  //   Tue: [1, 2, 3, 4, 5],
  //   Wed: [1, 2, 3, 4, 5],
  //   Thu: [1, 2, 3, 4, 5],
  //   Sat: [1, 2, 3, 4, 5]
  // })

  const timeTables = [
    {
      weeks: ["月", "火", "水", "木", "金"],
      times: [1, 2, 3, 4, 5],
    },
  ];

  const [week, setWeek] = useState("");
  const [time, setTime] = useState(0);

  return (
    <>
      <h1>履修登録ページ</h1>
      {/* {timeTables.map((timeTable, index) => {
        return (
          <table key={index} css={tableCss}>
            <tr>
              <th></th>
              {timeTable.weeks.map((week, index) => (
                <th key={index}>{week}</th>
              ))}
            </tr>
            {timeTable.times.map((time, index) => {
              return (
                <tr key={index}>
                  <th>{time}</th>
                  <td css={tdCss} onClick={() => setOpen(true)}></td>
                </tr>
              );
            })}
          </table>
        );
      })} */}

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

            <td css={tdCss}>
              {lessons.map(
                (lesson, index) =>
                  lesson.time === 1 &&
                  lesson.week === "Mon" && <p key={index}>{lesson.name}</p>
              )}
            </td>

            <td css={tdCss}>
              {lessons.map(
                (lesson, index) =>
                  lesson.time === 1 &&
                  lesson.week === "Tue" && <p key={index}>{lesson.name}</p>
              )}
            </td>
            <td css={tdCss}>
              {lessons.map(
                (lesson, index) =>
                  lesson.time === 1 &&
                  lesson.week === "Wed" && <p key={index}>{lesson.name}</p>
              )}
            </td>
            <td css={tdCss}>
              {lessons.map(
                (lesson, index) =>
                  lesson.time === 1 &&
                  lesson.week === "Thu" && <p key={index}>{lesson.name}</p>
              )}
            </td>
            <td css={tdCss}>
              {lessons.map(
                (lesson, index) =>
                  lesson.time === 1 &&
                  lesson.week === "Fri" && <p key={index}>{lesson.name}</p>
              )}
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
        timeTables={timeTables}
        week={week}
        time={time}
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
