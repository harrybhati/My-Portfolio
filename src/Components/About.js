// import React from 'react';

// function About() {
//   return (
//     <section id="about" className="about">
//       <div className="container">
//         <h2>About Me</h2>
//         <img src="path_to_profile_image" alt="Profile" className="profile" />
//         <p>Hello! I'm a web developer with a passion for creating beautiful and functional websites...</p>
//       </div>
//     </section>
//   );
// }

// export default About;
import React from 'react';
import './About.css'; // Assuming you have a separate CSS file for the About section styling

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title" style={{fontSize:60}}>About Me</h2>
          <p className="about-text">
            Hello! I'm Harendra Bhati, a passionate web developer dedicated to crafting beautiful and functional websites.
            I specialize in creating responsive and user-friendly web applications using the latest technologies.
            With a strong foundation in front-end and back-end development, I aim to deliver high-quality digital experiences.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src="path_to_profile_image" alt="Profile" className="about-profile-image" />
        </div>
      </div>
    </section>
  );
}

export default About;

