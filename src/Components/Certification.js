import React from 'react';
import './Certification.css'; // Assuming you have a separate CSS file for the Certification section styling

function Certification() {
  const certifications = [
    {
      title: 'Certification 1',
      url: 'https://www.example.com/certification1', // Replace with the actual URL
    },
    {
      title: 'Certification 2',
      url: 'https://www.example.com/certification2', // Replace with the actual URL
    },
    // Add more certifications as needed
  ];

  return (
    <section id="certification" className="certification">
      <div className="certification-container">
        <h2 className="certification-title">Certifications</h2>
        <ul className="certification-list">
          {certifications.map((cert, index) => (
            <li key={index} className="certification-item">
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="certification-link">
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certification;
