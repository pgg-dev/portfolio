import React, { forwardRef } from "react";
import "../styles/About.scss";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about-section">
      <div className="container">
        <h2 className="sec-tit">ABOUT ME</h2>
        <p className="desc">
          독학으로 시작해 현재 JavaScript의 매력에 빠져, 프론트엔드 개발자가
          되기 위해 앞으로 나아가고있습니다.
          <br />
          사용자가 경험하는 부분을 책임지고 세상에 유익함과 편의성을 줄 수 있는
          프론드엔드 개발자가 되고싶습니다.
        </p>
      </div>
    </section>
  );
});

export default About;
