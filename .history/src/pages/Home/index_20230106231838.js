import React from "react";
import { Route, Link } from "react-router-dom";
import HomeSlide from "../../components/layout/HomeSlide";

import Search from "../../components/Input/Search";
import Partner from "../../components/Main/Partner";
const Home = () => {
  return (
    <main className="main">
      <HomeSlide />
      <Search />
      {/* 해당 부분 main카테고리 박스 컴포넌트로 분리 예정 */}
      <div className="main-category container">
        <div className="main-category-box">
          <div className="main-category-top">
            <div className="main-category-top-title">
              <h2>프로그래밍</h2>
            </div>
          </div>
          <div className="main-category-bottom">
            {/* 강좌 리스트 틀 */}
            <div className="course-list">
               {/* 해당 부분 강좌 아이템 박스 컴포넌트로 분리 예정 */}
              {/* 강좌 하나하나의 아이템 박스 */}
              <Link to ='/' className="card btn course-list-item">
                <img className="card-img-top" src="https://cdn.inflearn.com/public/courses/330111/cover/989127a9-fac9-411f-b5a2-2a92ab404037/330111-eng.png" alt="강좌 이미지 url" />
                <div className="card-body">
                  <h5 className="card-title">강좌명</h5>
                  <p className="card-text">강좌 부제목</p>
                  <p className="card-text">강의자</p>
                </div>
              </Link>
              {/* 강좌 하나하나의 아이템 박스 */}
            </div>
          </div>
        </div>
      </div>
      <Partner />      
    </main>
  );
};

export default Home;
