import React from 'react';
import './Certification.css'; // Ensure this CSS file contains the responsive styling


function Certification() {
  const certifications = [
    {
      title: 'CISCO-CCNA: Introduction to Networks   ',
      },
    {
      title: 'PREPINSTA: Introduction to React.js , MERN Full Stack  ',
    
    },
    {
      title: 'Geekster:  Introduction to JavaScript Fundamentals, Git and GitHub, MySQL  ',
    
    }
   
  ];

  return (
    <section id="certification" className="certification">
      <div className="certification-container">
        <h2 className="certification-title">Certifications</h2>
        <ul className="certification-list">
          {certifications.map((cert, index) => (
            <li key={index} className="certification-item">
              
                
               
                <strong >{cert.title}</strong>
              
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certification;
