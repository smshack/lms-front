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
import Faq from "./Faq";
import Login from "./Member/Login";
import Singup from "./Member/Singup";
import Term from "./Member/Term";
import Privacy from "./Member/Privacy";
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
            <Route path="/member/login" component={Login} />
            <Route path="/member/signup" component={Singup} />
            <Route path="/member/term" component={Term} />
            <Route path="/member/privacy" component={Privacy} />
            <Route path="/notice" component={Notice} />
            <Route path="/courses" component={Course} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/lecture" component={Lecture} />
            <Route path="/instructor" component={Instructor} />
            <Route path="/info" component={Instructor} />
            <Route path="/faq" component={Faq} />
          <Footer />
        </>
      </Switch>
  );
};

export default RouteApp;
