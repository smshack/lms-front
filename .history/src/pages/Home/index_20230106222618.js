import React from "react";
import { Route, Link } from "react-router-dom";

import Main from "../../components/layout/Main";
const Home = () => {
  return (
    <div className="main-category">
      <div className="main-category-box">
        <div className="main-category-top">
          <div className="main-category-top-title">
            <h2>프로그래밍</h2>
          </div>
        </div>
        <div className="main-category-bottom">
          <div className="course-list">
            <Link to ='/' className="card btn btn-primary">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
