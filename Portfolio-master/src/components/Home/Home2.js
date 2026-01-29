import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a final-year <span className="purple">AI & ML Engineering</span> student with a strong interest in <span className="purple">backend development</span> and system-oriented application design, while building on a solid foundation in frontend and application development. I enjoy creating scalable, real-world solutions that balance usability with clean architecture. I have hands-on experience with <span className="purple">Python, JavaScript, Kotlin, FastAPI</span>, and <span className="purple">REST APIs</span>, and I like working across backend services, API integration, and CI/CD workflows.
              <br />
              <br />
              My key areas of interest include <span className="purple">scalable backend systems</span>, <span className="purple">ML-driven applications</span>, and gradually exploring DevOps practices to make applications more reliable and production-ready. Whenever possible, I enjoy building projects using <span className="purple">FastAPI</span>, along with modern frameworks like <span className="purple">React.js</span> and <span className="purple">Node.js</span>, focusing on maintainable and practical solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
