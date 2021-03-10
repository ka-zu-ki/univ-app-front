/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchRegisteredLessons } from "../apis";
import AppContext from "../contexts/AppContext";

import { bgWhiteCss } from "./Style/Layout/main";
import { 
  tableCss,
  tdCss, 
  thTimeCss,
  thWeekCss
} from "./Style/Object/Component/table";

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
                <td key={index} css={tdCss}>
                  {registeredLessons.map((registeredLesson) =>
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
              <th css={thTimeCss}>2</th>
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
              <th css={thTimeCss}>3</th>
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
              <th css={thTimeCss}>4</th>
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
              <th css={thTimeCss}>5</th>
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
      </div>
    
  );
};

export default TimetableLessons;
