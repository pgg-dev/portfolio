import React, { useState } from "react";
import "../styles/Header.scss";

function Header({ visual, about, skill, project }) {
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100);
  const executeScroll = ref => scrollToRef(ref);
  const [show, setShow] = useState(true);

  return (
    <header className="header cfixed">
      {show && (
        <nav>
          <ul className="gnb">
            <li onClick={e => executeScroll(visual)}>HOME</li>
            <li onClick={e => executeScroll(about)}>AOUT</li>
            <li onClick={e => executeScroll(skill)}>SKILL</li>
            <li onClick={e => executeScroll(project)}>PROJECT</li>
          </ul>
        </nav>
      )}
      <span className="menu-toggle-btn" onClick={() => setShow(!show)}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </header>
  );
}
export default Header;
