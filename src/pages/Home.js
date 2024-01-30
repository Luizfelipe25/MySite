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

function Home() {
  return (
    <div className="home">
      <div className="about">
      <img src= {perfil} />
      <h2>Olá, eu sou Luiz Felipe</h2>
      <script></script>
        <div className="prompt">
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
          <div class="arrow-bottom" width="80" height="80" viewBox="0 0 50 50">
                <a href="#experience"><KeyboardArrowDownIcon /></a>
            </div>
        </div>
      </div>
      {/* <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div> */}
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
            date="2018 - 2020"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Back End Engineer - Google
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
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
