import React from "react";
import { Row, Col } from "react-bootstrap";

function Techstack() {
  const skillSets = [
    "Full-Stack Development (MERN architecture, REST APIs)",
    "Android Application Development (Kotlin, scalable app design)",
    "Backend API Development (FastAPI, Express.js)",
    "AI & Machine Learning Engineering",
    "Generative AI & Chatbot Development",
    "Reinforcement Learning Systems",
    "Computer Vision & Object Detection",
    "Database Design & Data Modeling",
    "UI/UX Design & User-Centered Design",
    "System Design & Architecture Thinking",
    "Research & Technical Paper Writing",
    "API Security & Authentication",
    "Data Analysis & Visualization",
    "CI/CD & Version Control Workflows",
    "Technical Documentation & Reporting",
    "Problem Solving & Analytical Thinking",
    "Team Collaboration & Hackathon Experience"
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={10}>
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "30px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <ul style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px"
          }}>
            {skillSets.map((skill, index) => (
              <li key={index} style={{
                color: "#fff",
                fontSize: "1em",
                lineHeight: "1.6",
                display: "flex",
                alignItems: "center"
              }}>
                <span style={{
                  color: "#c770f0",
                  marginRight: "10px",
                  fontSize: "1.2em",
                  fontWeight: "bold"
                }}>•</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
