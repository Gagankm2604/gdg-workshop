import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section id="hero" className="section hero">
        <h1>Gagan K M</h1>
        <h2>Aspiring ML Engineer</h2>
        <p className="career-goal">
          I am passionate about building the Genai and AI Models.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>C</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Frameworks & Libraries</h4>
            <ul>
              <li>Flask</li>
              <li>Streamlit</li>
              <li>Pandas</li>
              <li>Numpy</li>
              <li>Scikit learn</li>
              <li>Open cv</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Jupyter notebook</li>
              <li>Google Collab</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="section projects">
        <h3>Projects</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>PLant disease classification</h4>
            <p>Built a plant disease deeplearning classification model and used opencv and media pipe for Image processing , Integrated Flask for web interface</p>
            <div className="project-links">
              <a href="#" target="_blank">Demo</a>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h4>Resume Screening app</h4>
            <p>i built a Resume screening app using NLP and integrated with the Stramlit we framework</p>
            <div className="project-links">
              <a href="#" target="_blank">Demo</a>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h4>Heart Disease classification</h4>
            <p>I built the Heart disease classification model</p>
            <div className="project-links">
              <a href="#" target="_blank">Demo</a>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Hackathons */}
      <section id="experience" className="section experience">
        <h3>Experience & Hackathons</h3>
        <div className="experience-item">
          <h4>HXLR8 Hackathon</h4>
          <span className="date">Nov 2024</span>
          <p>This was my first Hackathon , we built a Edtech project that helps students to learn in gamified way.</p>
        </div>
        <div className="experience-item">
          <h4>HackFusion 2.0 Hackathon</h4>
          <span className="date">Oct 2025</span>
          <p>In this hackathon we built a Insurace recommondation tool using regression ML model</p>
        </div>
        <div className="experience-item">
          <h4>Hackshethra</h4>
          <span className="date">Nov 2024</span>
          <p>In this hackathon we built project that helps blinds to learn using voice based teaching.</p>
        </div>
        {/* <div className="experience-item">
          <h4>Club Activity / Competition</h4>
          <span className="date">Month Year - Month Year</span>
          <p>Description of your contribution and impact.</p>
        </div> */}
      </section>

      {/* Contact & Links */}
      <section id="contact" className="section contact">
        <h3>Contact & Links</h3>
        <div className="contact-links">
          <a href="mailto:gagankmb510@gmail.com">Email</a>
          <a href="https://github.com/GaganKM264" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/gagankm" target="_blank">LinkedIn</a>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </div>
      </section>
    </div>
  );
}

export default App
