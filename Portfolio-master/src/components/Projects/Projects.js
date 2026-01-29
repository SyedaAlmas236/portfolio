import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import ticketeasy from "../../Assets/Projects/ticketeasy.png";
import emotion from "../../Assets/Projects/emotion.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import chatify from "../../Assets/Projects/chatify.png";
import empTracker from "../../Assets/Projects/employee performance tracker.png";
import fireDetection from "../../Assets/Projects/fire detection.png";
import homelyhub from "../../Assets/Projects/homelyhub.png";
import smartPlanner from "../../Assets/Projects/smart day planner.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empTracker}
              isBlog={false}
              title="Employee Performance Tracker"
              description="An Android application to monitor employee productivity, performance scores, and task completion. Built with Kotlin and Android Studio, leveraging Figma for UI/UX design and Supabase for backend data management."
              ghLink="https://github.com/SyedaAlmas236"
              demoLink="https://github.com/SyedaAlmas236"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot for Robotics & Automation"
              description="An intelligent chatbot providing information on robotics and automation startups with multilingual support. Developed using Google AI Studio and Vertex AI Agent Builder to deliver comprehensive startup insights."
              ghLink="https://github.com/SyedaAlmas236"
              demoLink="https://aistudio.google.com/apps/drive/1fC2ymUFYVT_hQc4hNtroTrDN3kpTdG7B?showPreview=true&showAssistant=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homelyhub}
              isBlog={false}
              title="HomelyHub"
              description="A full-stack MERN application for discovering and managing rental-style services. Features authentication, listings, image uploads via ImageKit, and advanced search & filters. Built with React, Node.js, Express, and MongoDB."
              ghLink="https://github.com/SyedaAlmas236"
              demoLink="https://github.com/SyedaAlmas236"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketeasy}
              isBlog={false}
              title="TicketEasy - SIH 2025"
              description="🏆 Grand Finale Participant (Team: Tech Slayers) - A paperless digital ticketing platform with QR-based validation to reduce queues and ticket fraud. Implements secure APIs, QR validation, booking systems, and secure transactions."
              ghLink="https://github.com/SyedaAlmas236"
              demoLink="https://github.com/SyedaAlmas236"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fireDetection}
              isBlog={false}
              title="AI-Based Fire Detection System"
              description="Real-time fire detection system using deep learning with YOLOv8. Trained on open-source fire and smoke image datasets that were cleaned, labeled, and augmented for optimal model performance."
              ghLink="https://github.com/SyedaAlmas236"
              demoLink="https://github.com/SyedaAlmas236"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartPlanner}
              isBlog={false}
              title="Smart Day Planner"
              description="📄 KSCST Funded Research Project - An intelligent scheduling system using reinforcement learning that adapts daily plans based on user behavior and feedback. Published research demonstrating adaptive scheduling with 85% user satisfaction."
              ghLink="https://github.com/SyedaAlmas236"
              demoLink="https://github.com/SyedaAlmas236"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
