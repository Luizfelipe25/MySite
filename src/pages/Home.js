import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Home.css";
import perfil from "../assets/perfil.png";
import Projects from "./Projects";

function Home() {
  return (
    <div className="home">
      <div className="about">
      <img src= {perfil} />
      <h2>Olá, eu sou Luiz Felipe</h2>
      <div className="language"><span></span></div>
        <div className="prompt">
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
          <div class="arrow-bottom" width="80" height="80" viewBox="0 0 50 50">
                <a href="#aboutMe"><KeyboardArrowDownIcon /></a>
            </div>
        </div>
      </div>
      <div id="aboutMe" className="skills">
        <h1> Sobre Mim</h1>
        <div className="about-me">
          <p>
            Engenheiro de software e formado em Engenharia da Computação<br/>
            atuo na área de desenvolvimento Web e Mobile desde 2019. <br/> <br/>
            Javeiro de coração, venho me aventurando nos meios de arquitetura e agora <br/>
            pretendo compartilhar um pouco dos meus conhecimentos com a comunidade!<br/><br/>
            Amo desenvolver! O fato de novos desafios aparecerem constantemente<br/>
            me motiva cada vez mais a evoluir na área tech, estar fora da minha zona <br/>
            de conforto é como um combustivel para a busca de mais conhecimento.<br/>

          </p>
          </div>
      </div>
        <div id="experience" className="experience">
        <h2 className="experienceTitle"> Experiência</h2>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2021"
            iconStyle={{ background: "#272727", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Engenharia da Computação
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bacharelado
            </h4>

            <p> Universidade de Taubaté</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2021"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Estagiário de Engenharia de software
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Embraer S/A
            </h4>
            <p>Developed the backend infrastructure for 3 projects.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer - Twitch
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Helped the team launch 2 major features by working both in the front
              end and back end.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
    
  );
}

export default Home;
