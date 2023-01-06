import { useEffect, useState } from "react";

import {  Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import "../styles/style.scss";
import Course from "./Courses";
import Home from "./Home";
import Instructor from "./Instructor";
import Lecture from "./Lecture";
import MyPage from "./MyPage";
import Notice from "./Notice";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Member from "./Member";
import HomeSlide from "../components/layout/HomeSlide";
import Search from "../components/Input/Search";
const RouteApp = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location,'location')
  },[location])
  return (
      <Switch>
        <>
        <Header />
            <Route exact path="/" component={Home} />
            <Route path="/member" component={Member} />
            <Route path="/member/login" component={Member} />
            <Route path="/member/signup" component={Member} />
            <Route path="/member/term" component={Member} />
            <Route path="/member/privacy" component={Member} />
            <Route path="/notice" component={Notice} />
            <Route path="/courses" component={Course} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/lecture" component={Lecture} />
            <Route path="/instructor" component={Instructor} />
          <Footer />
        </>
      </Switch>
  );
};

export default RouteApp;
