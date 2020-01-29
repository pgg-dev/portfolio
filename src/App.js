import React, { useRef } from "react";
import "./styles/reset.css";
import Header from "./components/Header";
import Visual from "./components/Visual";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import About from "./components/About";
import "./styles/App.scss";

function App() {
  const visual = useRef();
  const about = useRef();
  const skill = useRef();
  const project = useRef();

  return (
    <div className="App">
      <Header
        visual={visual}
        about={about}
        skill={skill}
        project={project}
      ></Header>
      <Visual
        ref={visual}
        heading={" I'm a front-end developer."}
        dataText={["안녕하세요 박금규입니다.", "포트폴리오 웹 사이트 입니다."]}
      />
      <About ref={about} />
      <Skill ref={skill} />
      <Project ref={project} />
      <Footer></Footer>
    </div>
  );
}

export default App;
