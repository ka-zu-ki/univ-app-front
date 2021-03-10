/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { fetchLogOut } from "../../apis";
import AppContext from "../../contexts/AppContext";
import { LOG_OUT } from "../../actions/index";

import { 
  headerCss,
  headerLeftCss,
  headerRightCss,
  headerUlCss,
  headerLiCss,
  headerBorderCss
} from "../Style/Layout/header";

const Header = () => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory()

  const logOut = async () => {
    const res = await fetchLogOut()
    console.log(res.data)
    
    dispatch({ type: LOG_OUT })
    history.push('/login')
  }

  return (
    <>
      <header>
        <div css={headerCss}>
          <div 
            css={headerLeftCss}
            onClick={() => {history.push('/')}}
            >
            University App
          </div>
          <div css={headerRightCss}>
            <ul css={headerUlCss}>
              <li css={headerLiCss} onClick={() => {history.push('/lessons')}}>授業一覧</li>
              <li css={headerLiCss} onClick={() => {history.push('/registration')}}>履修登録</li>
              <li css={headerLiCss} onClick={() => logOut()}>ログアウト</li>
            </ul>
          </div>
        </div>
        <div css={headerBorderCss}></div>
      </header>
    </>
  );
};

export default Header;
