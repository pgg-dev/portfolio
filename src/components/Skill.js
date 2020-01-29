import React, { forwardRef } from "react";
import "../styles/Skill.scss";

const Skill = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="skill-section">
      <div className="container">
        <h2 className="sec-tit">SKILL</h2>
        <ul className="skill-list">
          <li>
            <img src="/images/logo/javascript.svg" alt="javascript" />
            <h3>ES6 / 7</h3>
          </li>
          <li>
            <img src="/images/logo/react.svg" alt="react" />
            <h3>React</h3>
          </li>
          <li>
            <img src="/images/logo/redux.svg" alt="redux" />
            <h3>Redux</h3>
          </li>
          <li>
            <img src="/images/logo/html-5.svg" alt="html5" />
            <h3>HTML5</h3>
          </li>
          <li>
            <img src="/images/logo/css-3.svg" alt="css3" />
            <h3>CSS3</h3>
          </li>
          <li>
            <img src="/images/logo/sass.svg" alt="sass" />
            <h3>SCSS</h3>
          </li>
        </ul>
      </div>
    </section>
  );
});

export default Skill;
