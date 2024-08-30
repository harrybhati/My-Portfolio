import React from 'react';
import './Projects.css'; // Assuming you have a separate CSS file for the Projects section styling

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title" style={{fontSize:60}}>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">E-Com Dashboard</h3>
            <p className="project-description">The E-commerce Dashboard is a web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that enables users to manage their online store efficiently. It provides a robust interface for adding, updating, and deleting products, as well as user authentication for logging in and out.</p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Chat Application</h3>
            <p className="project-description">Description of your project...</p>
          </div>
          <div className="project-card">
            <h3 className="project-title">ToDo List</h3>
            <p className="project-description">Description of your project...</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
