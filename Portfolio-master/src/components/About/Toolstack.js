import React from "react";
import { Row, Col } from "react-bootstrap";

function Toolstack() {
  const toolCategories = [
    {
      category: "Development & Coding",
      tools: ["VS Code", "Android Studio", "Git & GitHub", "GitHub Copilot"]
    },
    {
      category: "Frontend & UI",
      tools: ["React.js", "Tailwind CSS", "Figma", "HTML5 / CSS3"]
    },
    {
      category: "Backend & APIs",
      tools: ["Node.js", "Express.js", "FastAPI", "Pydantic", "JWT Authentication"]
    },
    {
      category: "Databases & Storage",
      tools: ["MongoDB", "Supabase (PostgreSQL)"]
    },
    {
      category: "AI / ML & GenAI",
      tools: ["Python", "Scikit-learn", "Pandas", "YOLOv8", "Google AI Studio", "Vertex AI Agent Builder", "ChatGPT, Gemini, Claude"]
    },
    {
      category: "Cloud, DevOps & Integrations",
      tools: ["Firebase", "GitHub CI/CD", "ImageKit", "Salesforce Agentforce"]
    },
    {
      category: "Analytics & Research",
      tools: ["Power BI", "LaTeX"]
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={11}>
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "30px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "25px"
          }}>
            {toolCategories.map((category, idx) => (
              <div key={idx}>
                <h5 style={{
                  color: "#c770f0",
                  marginBottom: "15px",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {category.category}
                </h5>
                <ul style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0"
                }}>
                  {category.tools.map((tool, toolIdx) => (
                    <li key={toolIdx} style={{
                      color: "#fff",
                      fontSize: "0.95em",
                      lineHeight: "1.8",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <span style={{
                        color: "#c770f0",
                        marginRight: "10px",
                        fontSize: "1em",
                        fontWeight: "bold"
                      }}>▸</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
