/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { fetchRegisteredLessons } from "../apis";
import AppContext from "../contexts/AppContext";

const TimetableLessons = () => {
  const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const [registeredLessons, setRegisteredLessons] = useState([]);
  const { state } = useContext(AppContext);
  const userId = state.id;

  useEffect(() => {
    let unmounted = false

    const fetchLessons = async (userId) => {
      const res = await fetchRegisteredLessons(userId);
      const registeredLessons = res.data;
  
      if (!unmounted) {
        setRegisteredLessons(registeredLessons);
      }
    };

    fetchLessons(userId);

    const cleanup = () => {
      unmounted = true
    }

    return cleanup
  }, [userId]);

  return (
    <>
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
              <td key={index} css={tdCss}>
                {registeredLessons.map((registeredLesson, index) =>
                  registeredLesson.week === week &&
                  registeredLesson.time === 1 ? (
                    <p 
                      key={registeredLesson.id}
                    >
                      <Link to={`/mylesson/${registeredLesson.id}`} key={registeredLesson.id}>
                        {registeredLesson.name}
                      </Link>
                    </p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                )}
              </td>
            ))}
          </tr>
          <tr>
            <th>2</th>
            {weeks.map((week, index) => (
              <td key={index} css={tdCss}>
                {registeredLessons.map((registeredLesson) =>
                  registeredLesson.week === week &&
                  registeredLesson.time === 2 ? (
                    <p key={registeredLesson.id}>
                      <Link to={`/mylesson/${registeredLesson.id}`} key={registeredLesson.id}>
                        {registeredLesson.name}
                      </Link>
                    </p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                )}
              </td>
            ))}
          </tr>
          <tr>
            <th>3</th>
            {weeks.map((week, index) => (
              <td key={index} css={tdCss}>
                {registeredLessons.map((registeredLesson) =>
                  registeredLesson.week === week &&
                  registeredLesson.time === 3 ? (
                    <p key={registeredLesson.id}>
                      <Link to={`/mylesson/${registeredLesson.id}`} key={registeredLesson.id}>
                        {registeredLesson.name}
                      </Link>
                    </p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                )}
              </td>
            ))}
          </tr>
          <tr>
            <th>4</th>
            {weeks.map((week, index) => (
              <td key={index} css={tdCss}>
                {registeredLessons.map((registeredLesson) =>
                  registeredLesson.week === week &&
                  registeredLesson.time === 4 ? (
                    <p key={registeredLesson.id}>
                      <Link to={`/mylesson/${registeredLesson.id}`} key={registeredLesson.id}>
                        {registeredLesson.name}
                      </Link>
                    </p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                )}
              </td>
            ))}
          </tr>
          <tr>
            <th>5</th>
            {weeks.map((week, index) => (
              <td key={index} css={tdCss}>
                {registeredLessons.map((registeredLesson) =>
                  registeredLesson.week === week &&
                  registeredLesson.time === 5 ? (
                    <p key={registeredLesson.id}>
                      <Link to={`/mylesson/${registeredLesson.id}`} key={registeredLesson.id}>
                        {registeredLesson.name}
                      </Link>
                    </p>
                  ) : (
                    <div key={registeredLesson.id}></div>
                  )
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TimetableLessons;

const tableCss = css`
  width: 800px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
`;

const tdCss = css`
  background-color: #f5f5f5;
`;
