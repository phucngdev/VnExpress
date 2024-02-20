import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/user/Header";
import Category from "../components/user/Category";

const PublicRouter = () => {
  return (
    <>
      <Header></Header>
      <Category></Category>
      <Outlet></Outlet>
    </>
  );
};

export default PublicRouter;
