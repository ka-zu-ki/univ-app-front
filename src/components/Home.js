/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";

import AppContext from "../contexts/AppContext";
import LogIn from './auth/LogIn';
import TimetableLessons from "./TimetableLessons";

import { pageTitleCss, sectionTitleCss } from "../components/Style/Object/Component/title";
import { innerCss } from "../components/Style/Layout/main";

const Home = () => {
  const {state} = useContext(AppContext)

  return (
    <>
      {
        state.isLogin ?
          <>
            <div css={innerCss}>
              <div css={pageTitleCss}>マイページ</div>
              <div css={sectionTitleCss}>時間割</div>
              <TimetableLessons />
            </div>
          </>
        :
          <LogIn/>
      }
    </>
  );
};

export default Home;
