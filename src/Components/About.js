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
          Hi, I'm Harendra Bhati—a web developer passionate about crafting seamless digital experiences. I specialize in the MERN stack, combining front-end flair with back-end expertise. With a solid grip on HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Express.js, Java, MySQL, Git, and GitHub, I bring ideas to life through clean, responsive, and user-friendly web applications.</p>
        </div>
        <div className="about-image-wrapper">
          <img src="path_to_profile_image" alt="Profile" className="about-profile-image" />
        </div>
      </div>
    </section>
  );
}

export default About;

