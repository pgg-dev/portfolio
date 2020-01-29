import React, { forwardRef } from "react";
import "../styles/Project.scss";

const Project = forwardRef((props, ref) => {
  console.log(ref);
  return (
    <section ref={ref} className="project-section">
      <div className="container">
        <h2 className="sec-tit">Project</h2>
        <ul className="project-list">
          <li>
            <img src="/images/boxoffice.png" alt="boxoffice" />
            <div className="project-contents">
              <div className="project-title">
                <strong>01</strong>BOX OFFICE
              </div>
              <div className="project-desc">
                <p>
                  박스오피스를 날짜 별로 확인 할 수 있는 사이트입니다.
                  <br />
                  날짜 검색, 로그인 및 회원가입, 댓글 등이 가능한 SPA 웹페이지
                  입니다.
                </p>
                <div className="project-tag">
                  <span>#ES6/7</span>
                  <span>#React</span>
                  <span>#React-ROUTER</span>
                  <span>#Redux</span>
                  <span>#SCSS</span>
                  <span>#FIREBASE</span>
                </div>
                <div className="project-btn">
                  <span>
                    <a href="https://github.com/pgg-dev/boxoffice">GITHUB</a>
                  </span>
                  <span>
                    <a href="http://boxoffice.dothome.co.kr/">SITE</a>
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
});

export default Project;
