import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaTrophy, FaAward, FaMedal, FaGraduationCap, FaStar } from "react-icons/fa";
import "./Certificates.css";

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Smart India Hackathon 2025",
      description: "Grand Finale Participant",
      icon: <FaTrophy />,
      category: "achievement",
      color: "#FFD700"
    },
    {
      id: 2,
      title: "Oracle Certified",
      description: "Cloud Infrastructure 2025 – AI Foundations Associate",
      icon: <FaAward />,
      category: "certification",
      color: "#FF6B35"
    },
    {
      id: 3,
      title: "IIT Bombay",
      description: "A Grade in Python Programming Workshop",
      icon: <FaGraduationCap />,
      category: "achievement",
      color: "#4169E1"
    },
    {
      id: 4,
      title: "100 Days of Python",
      description: "Udemy Certification",
      icon: <FaStar />,
      category: "certification",
      color: "#3776AB"
    },
    {
      id: 5,
      title: "Build Apps with ChatGPT & Gemini",
      description: "Great Learning",
      icon: <FaStar />,
      category: "certification",
      color: "#00D084"
    },
    {
      id: 6,
      title: "Elite Gold",
      description: "Ethical Hacking (VTU)",
      icon: <FaMedal />,
      category: "achievement",
      color: "#FFD700"
    },
    {
      id: 7,
      title: "Elite Silver",
      description: "Solid Waste Management (VTU)",
      icon: <FaMedal />,
      category: "achievement",
      color: "#C0C0C0"
    },
    {
      id: 8,
      title: "Competitive Badminton Player",
      description: "College Level Sports Achievement",
      icon: <FaTrophy />,
      category: "sports",
      color: "#FF1493"
    },
    {
      id: 9,
      title: "Creative Poster Design",
      description: "Winner of Design Competitions",
      icon: <FaAward />,
      category: "achievement",
      color: "#9932CC"
    }
  ];

  return (
    <>
      <Particle />
      <Container fluid className="certificate-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={12}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center", color: "white" }}>
                My <strong className="purple">Certifications & Achievements</strong>
              </h1>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {certificates.map((cert) => (
              <Col md={6} lg={4} key={cert.id} style={{ marginBottom: "30px" }}>
                <div className="certificate-card" style={{ borderLeftColor: cert.color }}>
                  <div className="certificate-icon" style={{ color: cert.color }}>
                    {cert.icon}
                  </div>
                  <div className="certificate-content">
                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-description">{cert.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Certificates;
