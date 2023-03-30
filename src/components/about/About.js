import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h3>My Story</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
            eget neque sit amet scelerisque. Sed ac odio eget magna bibendum laoreet
            vitae quis neque. Fusce id lorem id sapien imperdiet pellentesque. Nam
            semper sapien vitae ante consectetur, vel molestie sapien ultrices.
          </p>
        </div>
        <div className="about-section">
          <h3>My Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="about-section">
          <h3>My Hobbies</h3>
          <ul>
            <li>Reading</li>
            <li>Hiking</li>
            <li>Playing guitar</li>
            <li>Watching movies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
