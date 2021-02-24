/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

import Modal from "./Modal";
import { fetchLessons } from "../apis";

const Registration = () => {
  const [open, setOpen] = useState(false);
  const [lessons, setLessons] = useState([]);
  const weeks = ["月", "火", "水", "木", "金"];
  const times = [1, 2, 3, 4, 5];
  const tds = [1, 2, 3, 4, 5];

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

  return (
    <>
      <h1>履修登録ページ</h1>
      <table css={tableCss}>
        <thead>
          <tr>
            <th></th>
            {weeks.map((week, index) => (
              <th key={index}>{week}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => {
            return (
              <tr key={index}>
                <th key={index}>{time}</th>
                {tds.map((index) => (
                  <td
                    key={index}
                    css={tdCss}
                    onClick={() => setOpen(true)}
                  ></td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal open={open} setOpen={setOpen} lessons={lessons} />
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
