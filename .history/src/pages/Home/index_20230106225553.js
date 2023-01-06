import React from "react";
import { Route, Link } from "react-router-dom";
import HomeSlide from "../../components/layout/HomeSlide";

import Search from "../../components/Input/Search";
const Home = () => {
  return (
    <main className="main">
      <HomeSlide />
      <Search />
      {/* 해당 부분 main카테고리 박스로 분리 예정 */}
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
      {/* 해당 부분 협력사로 컴포넌트로 분리 예정 */}
      <section className="group-section">
        <h3 className="group-section__title">
        이미 많은 기업 구성원들이 <br className="group-section__title--mobile-only" />인프런에서 성장하고 있어요.
        </h3>
        <div className="group-section__logo-cover">
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/c085de89-e640-4bc0-afad-efd1e96dbb58/%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB.png" alt="라인" /></div>
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/0add4321-40e2-46db-9aac-3222b25a69c4/%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6%E1%84%83%E1%85%B3%E1%86%AF.png" alt="우아한형제들" /></div>
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/34618dc7-2862-4db0-9bbc-631ca0c8f5b5/sk.png" alt="sk" /></div>
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/1429748f-8c44-4941-8913-752071578eaf/%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A5.png" alt="네이버" /></div>
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/e7dd4c2a-8496-4708-b9fd-ae66317e40ad/%E1%84%82%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%86%AB.png" alt="넥슨" /></div>
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/10b49bf2-cd9a-4501-ac3c-84059d04f171/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC.png" alt="삼성" /></div>
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/a041f2fa-7f40-4517-bdb7-822fc7800d80/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9.png" alt="카카오" /></div>
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/b47b4ead-5141-46ec-8003-81c6dbc2e5b7/LG.png" alt="LG" /></div>
          <div className="group-section__logo-el"><img src="https://cdn.inflearn.com/public/group_logo/0/4aa479b9-4e05-4f8e-84b3-1fb7edb60c0c/nc.png" alt="nc" /></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
