import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content1">
          <img src="/images/mail.svg" alt="mail" />
          <span>park.geumgyu@gmail.com</span>
        </div>
        <div className="footer-content2">
          <a href="https://github.com/pgg-dev">
            <img src="/images/github.svg" alt="github" />
          </a>
          <a href="https://pgg-dev.tistory.com/">
            <img src="/images/blog.jpg" alt="blog" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
