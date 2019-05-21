import React, { Component } from 'react';
import {
  MDBBtn
} from 'mdbreact';
import profile from '../images/richard-davis.jpeg';

//Imported components for skills section
import Backend from './skills/Backend';
import Frontend from './skills/Frontend';

class About extends Component {
  render() {
    return (
      <>
      <section id="about">
        <div className="title-container about-title">
          <h1 data-aos="fade-up">About Me</h1>
        </div>
        <div className="about-container">
          <div className="picture-cv-container" data-aos="fade-up">
            <img
              src={profile}
              className="profile-picture"
              alt="profile of richard"
            />
            <div className="cv-button-container">
              <MDBBtn className="cv-button">
                <a
                  href="https://drive.google.com/file/d/1QVdSpdP-JZ20GrZu0ApqVp-Mx-urqGHW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">Download CV
                </a>
              </MDBBtn>
            </div>
          </div>
          <div className="description-container" data-aos="fade-up">
            <h1>Richard Davis</h1>
            <h4>Full-Stack Web Developer</h4>
              <hr />
            <p>
            It can take a long time to figure out what you truly are passionate about. I entered college thinking I wanted to go into politics and become a lawyer. After deciding politics would destroy my sanity, I reached into the mental void by studying psychology. I eventually landed on cellular and molecular and wanted to pursue my medical doctorate as a psychiatrist. I was never truly passionate about any of these paths. I wanted to work with people but also be mentally challenged with puzzles and thought-experiments.
            </p>
            <p>
            The day I found coding was the day I found my passion.
            </p>
            <p>
            What drew me to coding as a career was the idea of constantly growing. The entire industry, from tech giants all the way down to the individual, is constantly evolving. There's always some new tech to learn. That journey is what excites me!
            </p>
            <p>
            One of my personal strengths is my ability to communicate effectively and help people understand each other's perspectives. I have worked as a grade school science teaching assistant, run community meetings, planned large-scale county events, and worked as a counselor. I can connect people and have knack for talking to anyone young, old, and in-between.
            </p>
            <p>
            I feel that effective communication is the cornerstone of any good business or organization. Not everyone has to get along, but they need to work together in order to build something better.
            </p>
              <hr />
            <h4>What Am I Currently Working On?</h4>
              <ul className="description-container-current-projects">
                <li><a href="https://github.com/r742davis/mug_club">Mug Club Membership App (Madison Bear Garden)</a></li>
                <li><a href="https://www.udemy.com/advanced-javascript-concepts/">Advanced JavaScript (Andrei Neagoie)</a></li>
                <li><a href="https://javascript30.com/">JavaScript30</a></li>

              </ul>
              <hr />
            <div className="skills-container">
              <Frontend />
              <div className="backend-skills-container">
                <div className="backend-skills-title">
                  <h4>Backend Skills</h4>
                </div>
                <ul>
                  <li><img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png" className="skill-icon" alt="express"/>Express.js</li>
                  <li><img src="https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png" className="skill-icon" alt="mongo db"/>MongoDB</li>
                  <li><img src="https://www.balena.io/docs//img/language/nodejs.svg" className="skill-icon" alt="node js"/>Node.js</li>
                  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png" className="skill-icon" alt="Postgre SQL"/>PostgreSQL</li>
                  <li><img src="https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/40/medium/rubylogo111.png?1444285834" className="skill-icon" alt="ruby on rails"/>Ruby on Rails</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default About;
