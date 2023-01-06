import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <header id={`header`}>
      <nav className='navbar'>
        {/* 모바일 버전 navbar */}
        <div className='container header_mobile_container'>

        </div>
        {/*  PC 버전 navbar */}
        <div className='container header_desktop_container'>
          <div className='content'>
            {/* 로고 부분 */}
            <div className='brand_header'>
              <Link className='brand_logo' to='/'><h3>Smart Study</h3></Link>
            </div>

            {/* 메뉴 부분 */}
            <div className='navbar-menu'>
              {/* 왼쪽 페이지 네비게이션 부분 */}
              <div className='navbar-left'>
                <div className='has-dropdown is-hoverable navbar-item category_menu content--no-list-style'>
                  <Link className='navbar-item btn btn-light' to='/courses'><span>강좌</span></Link>
                </div>
                <div className='has-dropdown is-hoverable navbar-item category_menu content--no-list-style'>
                  <Link className='navbar-item btn btn-light' to='/notice'><span>공지사항</span></Link>
                </div>
              </div>
              <div className='navbar-center'>

              </div>
              <div className='navbar-right'>
                <div className='searchbox input-group'>
                    <input type='text' class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" ></input>
                </div>
                <Link to="/member/login" className="btn btn btn-outline-success">로그인</Link>
                <Link to="/member/signup" className="btn btn btn-outline-info">회원가입</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header