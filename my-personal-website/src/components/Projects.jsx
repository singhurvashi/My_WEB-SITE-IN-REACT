// src/components/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>Telecheck - Processing and Risk Analytics Service</h3>
        <ul>
          <li>Led a comprehensive initiative to strengthen and modernize an existing application, focusing on feature enhancement, bug elimination, and migration from the outdated Solaris operating system to a modern Linux environment.</li>
          <li>Employed a strategic approach to introduce new features, enriching the user experience while ensuring seamless compatibility with the existing system.</li>
          <li>Leveraged a technology stack including Java, Spring, Spring Boot, Spring MVC, HTML, CSS, JavaScript, Hibernate, and Eclipse, along with microservices architecture to achieve project objectives effectively.</li>
        </ul>
      </div>
      <div>
        <h3>MedConnect - Healthcare Ecosystem</h3>
        <ul>
          <li>MedConnect is a comprehensive healthcare ecosystem comprising five microservices: Authorization Service, Pharma Supply, Portal, Medicine Stock, and Doctor Representative.</li>
          <li>These microservices synergistically connect healthcare providers, pharmaceutical companies, and representatives, streamlining operations and enhancing patient care.</li>
          <li>Technologies Used: Java, Spring Boot, Spring Security, Microservices Architecture, RESTful APIs, Docker, MySQL, JSP, HTML/CSS, Git</li>
        </ul>
      </div>
      <div>
        <h3>Investmates: A Platform for Next-Gen Investors</h3>
        <ul>
          <li>Developed GoREST, a high-performance RESTful API in Go, designed to provide fast and efficient data access for web and mobile applications.</li>
          <li>Integrated JSON Web Token (JWT) authentication ensures secure user access control.</li>
          <li>Cloud deployment on platforms like AWS or GCP ensures scalability and high availability.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
