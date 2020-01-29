import React from "react";
import "../styles/Footer.scss";
import mail from "../images/mail.svg";
import github from "../images/github.svg";
import blog from "../images/blog.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content1">
          <img src={mail} alt="mail" />
          <span>park.geumgyu@gmail.com</span>
        </div>
        <div className="footer-content2">
          <a href="https://github.com/pgg-dev">
            <img src={github} alt="github" />
          </a>
          <a href="https://pgg-dev.tistory.com/">
            <img src={blog} alt="blog" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
