import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  const username = "SyedaAlmas236";
  const [totalContribs, setTotalContribs] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    // Fetch total public contributions using REST API
    const query = `
      query($userName:String!) {
        user(login: $userName) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    if (token) {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          query,
          variables: { userName: username },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const total = data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
          console.log("Total contributions (all time):", total);
          setTotalContribs(total);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      {/* Total Contributions Display */}
      {!loading && totalContribs > 0 && (
        <Col xs={12} style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{
            backgroundColor: "rgba(199, 132, 245, 0.1)",
            padding: "12px 25px",
            borderRadius: "8px",
            border: "1px solid rgba(199, 132, 245, 0.3)",
            display: "inline-block",
            fontSize: 16
          }}>
            <span style={{ color: "#c770f0", fontWeight: "bold", fontSize: 20 }}>
              {totalContribs}
            </span>
            <span style={{ color: "#aaa", marginLeft: 10 }}>
              Total Contributions
            </span>
          </div>
        </Col>
      )}

      {/* GitHub Calendar */}
      <Col xs={12} style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <GitHubCalendar
          username={username}
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={14}
        />
      </Col>
    </Row>
  );
}

export default Github;
