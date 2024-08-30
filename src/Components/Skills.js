import React from 'react';
import './Skills.css'; // Assuming you have a separate CSS file for the Skills section styling
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiGit, SiGithub } from 'react-icons/si';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title" style={{fontSize:60}}>Skills</h2>
        <ul className="skills-list">
          <li className="skill-item">
            <FaHtml5 size={60} style={{ color: '#e34c26' }} />
            <span>HTML</span>
          </li>
          <li className="skill-item">
            <FaCss3Alt size={60} style={{ color: '#1572b6' }} />
            <span>CSS</span>
          </li>
          <li className="skill-item">
            <FaJs size={60} style={{ color: '#f7df1e' }} />
            <span>JavaScript</span>
          </li>
          <li className="skill-item">
            <FaReact size={60} style={{ color: '#61dafb' }} />
            <span>React.js</span>
          </li>
          <li className="skill-item">
            <FaNodeJs size={60} style={{ color: '#8cc84b' }} />
            <span>Node.js</span>
          </li>
          <li className="skill-item">
            <SiExpress size={60} style={{ color: '#000' }} />
            <span>Express.js</span>
          </li>
          <li className="skill-item">
            <SiMongodb size={60} style={{ color: '#4db33d' }} />
            <span>MongoDB</span>
          </li>
          <li className="skill-item">
            <SiMysql size={60} style={{ color: '#00758f' }} />
            <span>MySQL</span>
          </li>
          <li className="skill-item">
            <SiGit size={60} style={{ color: '#f1502f' }} />
            <span>Git</span>
          </li>
          <li className="skill-item">
            <SiGithub size={60} style={{ color: '#181717' }} />
            <span>GitHub</span>
          </li>
         
        </ul>
      </div>
    </section>
  );
}

export default Skills;
