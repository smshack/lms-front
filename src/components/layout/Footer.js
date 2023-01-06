import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee ,Git} from '@fortawesome/free-solid-svg-icons'
const Footer = props => {
  return (
    <footer id='footer'>
        <div className='footer_top menu_list_cover'>
          <div className='footer_menu'>
            <div className='title'>
              <h4>Smart Study</h4>
            </div>
            <li><Link to="/info">Smart Study 소개</Link></li>
          </div>
          <div className='footer_menu'>
            <div className='title'>
              <h4>신청하기</h4>
            </div>
            <li><Link to="/instructor">강의자 신청</Link></li>
          </div>
          <div className='footer_menu'>
            <div className='title'>
              <h4>고객센터</h4>
            </div>
            <li><Link to="/notice">공지사항</Link></li>
            <li><Link to="/faq">자주묻는 질문</Link></li>
          </div>
        </div>
        <div className='footer_bottom'>
          <div className='footer_bottom_left footer_info'>
            <div className='footer_info_top'>
              <span className='logo'>
                <Link to="/">Smart Study</Link>
              </span>
              <span>
                <Link to="/member/privacy">개인정보처리방칭</Link>
              </span>
              <span>
                <Link to="/member/term">이용약관</Link>
              </span>
            </div>
            <div className='footer_info_bottom'>
              <div className="is-mobile info_label open">
                (주)Smart Study 사업자 정보
                <span className="is-mobile info_caret"><FontAwesomeIcon icon={faCoffee} /><FontAwesomeIcon icon={faCoffee} /></span>
              </div>
              <div className="info-dropdown">
                <span className="is-hidden-mobile">(주)Smart Study | </span>
                <span>대표자: 서명석 | </span>
                <span>
                  사업자번호: 000-00-0000
                  <Link to="/" target="_blank">사업자 정보 확인</Link>
                </span>
                <br />
                <span>통신판매업: 2023 정보통신 000000 | </span>
                <span>개인정보보호책임자: 서명석 | </span>
                <span>이메일: <Link to="mailto:5432tat@naver.com">5432tat@naver.com</Link></span>
                <br />
                <span>주소: 경기도 성남시 분당구 ~~~</span>
              </div>
            </div>
          </div>
          <div className='footer_bottom_center footer_info'>
          </div>
          <div className='footer_bottom_right footer_info'>
            <span>깃</span>
            <span>노션</span>
            <span>velog</span>
          </div>
        </div>
    </footer>
  );
}

Footer.propTypes = {}

export default Footer