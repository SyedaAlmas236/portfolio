import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Syeda Almas</span>, an <span className="purple">AI & Machine Learning engineering student</span> with a strong interest in <span className="purple">Backend Development, Generative AI, and System Design</span>. I have hands-on experience building <span className="purple">RESTful APIs using FastAPI</span>, working with secure authentication, and designing scalable backend architectures through real-world internships and projects.
            <br />
            <br />
            My technical journey includes developing <span className="purple">Android applications</span>, <span className="purple">full-stack MERN projects</span>, <span className="purple">AI-powered systems</span>, and intelligent chatbots using modern tools like <span className="purple">Vertex AI Agent Builder</span> and <span className="purple">Google AI Studio</span>. I enjoy working close to data—designing schemas, validating inputs, and ensuring systems are reliable and maintainable.
            <br />
            <br />
            Outside of coding, I stay creative and curious by:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & ML innovations and Generative AI applications 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing and building scalable backend systems 🔧
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in hackathons, research projects, and internships 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Expressing creativity through UI/UX design and problem-solving 🎨
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that matter, adapt intelligently, and scale with purpose"{" "}
          </p>
          <footer className="blockquote-footer">Syeda Almas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
