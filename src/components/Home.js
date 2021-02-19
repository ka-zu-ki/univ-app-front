import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to={"/lessons"}>授業一覧</Link>
    </>
  );
};

export default Home;
