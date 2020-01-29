import React, { forwardRef } from "react";
import "../styles/Skill.scss";
import jsImg from "../images/logo/javascript.svg";
import reactImg from "../images/logo/react.svg";
import reduxImg from "../images/logo/redux.svg";
import htmlImg from "../images/logo/html-5.svg";
import cssImg from "../images/logo/css-3.svg";
import sassImg from "../images/logo/sass.svg";

const Skill = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="skill-section">
      <div className="container">
        <h2 className="sec-tit">SKILL</h2>
        <ul className="skill-list">
          <li>
            <img src={jsImg} alt="javascript" />
            <h3>ES6 / 7</h3>
          </li>
          <li>
            <img src={reactImg} alt="react" />
            <h3>React</h3>
          </li>
          <li>
            <img src={reduxImg} alt="redux" />
            <h3>Redux</h3>
          </li>
          <li>
            <img src={htmlImg} alt="html5" />
            <h3>HTML5</h3>
          </li>
          <li>
            <img src={cssImg} alt="css3" />
            <h3>CSS3</h3>
          </li>
          <li>
            <img src={sassImg} alt="sass" />
            <h3>SCSS</h3>
          </li>
        </ul>
      </div>
    </section>
  );
});

export default Skill;
