/** @jsxImportSource @emotion/react */

import React, { useEffect, useState, useContext } from "react";

import Modal from "./Modal";
import { fetchConditionalLessons, fetchRegisteredLessons } from "../apis";
import AppContext from "../contexts/AppContext";

import { 
  tableCss,
  tdCss, 
  thTimeCss,
  thWeekCss
} from "./Style/Object/Component/table";
import { bgWhiteCss, innerCss } from "./Style/Layout/main";
import { pageTitleCss } from "../components/Style/Object/Component/title";
import { createButtonLong } from "../components/Style/Object/Component/button";

const Registration = () => {
  const [open, setOpen] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const { state } = useContext(AppContext);
  const userId = state.id;
  const [registeredLessons, setRegisteredLessons] = useState([]);
  console.log(userId);
  const [pending, setPending] = useState(false)

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
    
    setPending(true);

    const res = await fetchRegisteredLessons(userId);
    const registeredLessons = res.data;

    setRegisteredLessons(registeredLessons);
    console.log(registeredLessons);
    
    setPending(false);
  };

  useEffect(() => {
    fetchLessons(userId);
  }, [open]);

  return (
    <>
      <div css={innerCss}>
        <div css={pageTitleCss}>履修登録</div>
        {pending ? (
          <h2>ローディング中</h2>
        ) : (
          <div css={bgWhiteCss}>
            <table css={tableCss}>
            <thead>
              <tr>
                <th></th>
                <th css={thWeekCss}>月</th>
                <th css={thWeekCss}>火</th>
                <th css={thWeekCss}>水</th>
                <th css={thWeekCss}>木</th>
                <th css={thWeekCss}>金</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th css={thTimeCss}>1</th>
                {weeks.map((week, index) => (
                  <td
                    key={index}
                    css={tdCss}
                    onClick={() => handleClick(week, 1)}
                  >
                    {registeredLessons.map((registeredLesson) =>
                      registeredLesson.week === week &&
                      registeredLesson.time === 1 ? (
                        <p key={registeredLesson.id}>{registeredLesson.name}</p>
                      ) : (
                        <div key={registeredLesson.id}></div>
                      )
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <th css={thTimeCss}>2</th>
                {weeks.map((week, index) => (
                  <td
                    key={index}
                    css={tdCss}
                    onClick={() => handleClick(week, 2)}
                  >
                    {registeredLessons.map((registeredLesson) =>
                      registeredLesson.week === week &&
                      registeredLesson.time === 2 ? (
                        <p key={registeredLesson.id}>{registeredLesson.name}</p>
                      ) : (
                        <div key={registeredLesson.id}></div>
                      )
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <th css={thTimeCss}>3</th>
                {weeks.map((week, index) => (
                  <td
                    key={index}
                    css={tdCss}
                    onClick={() => handleClick(week, 3)}
                  >
                    {registeredLessons.map((registeredLesson) =>
                      registeredLesson.week === week &&
                      registeredLesson.time === 3 ? (
                        <p key={registeredLesson.id}>{registeredLesson.name}</p>
                      ) : (
                        <div key={registeredLesson.id}></div>
                      )
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <th css={thTimeCss}>4</th>
                {weeks.map((week, index) => (
                  <td
                    key={index}
                    css={tdCss}
                    onClick={() => handleClick(week, 4)}
                  >
                    {registeredLessons.map((registeredLesson) =>
                      registeredLesson.week === week &&
                      registeredLesson.time === 4 ? (
                        <p key={registeredLesson.id}>{registeredLesson.name}</p>
                      ) : (
                        <div key={registeredLesson.id}></div>
                      )
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <th css={thTimeCss}>5</th>
                {weeks.map((week, index) => (
                  <td
                    key={index}
                    css={tdCss}
                    onClick={() => handleClick(week, 5)}
                  >
                    {registeredLessons.map((registeredLesson) =>
                      registeredLesson.week === week &&
                      registeredLesson.time === 5 ? (
                        <p key={registeredLesson.id}>{registeredLesson.name}</p>
                      ) : (
                        <div key={registeredLesson.id}></div>
                      )
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          </div>
        )}
        <button css={createButtonLong}>履修登録を決定する</button>
      </div>
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
