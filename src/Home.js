import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <div className="whole">
      <div
        border="primary"
        style={{
          width: "100%",
          maxWidth: "700px",

          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          padding: "20px", // Add padding to the card
        }}
      >
        <Row style={{ backgroundColor: "white", borderRadius: "40px" }}>
          <Col
            md={6}
            className="result-column"
            style={{
              background: `linear-gradient(
      to bottom,
     hsl(252, 100%, 67%), 
    hsl(241, 81%, 39%)
    )`,
              color: "white",
              borderRadius: "40px",
              padding: "20px",
              textAlign: "center", // Add padding to the columns
              // Add spacing between columns
            }}
          >
            <h5>Your Result</h5>
            <Card.Body>
              <Card.Title style={{ paddingTop: "40px" }}>
                <div className="circle" style={{ position: "relative" }}>
                  <h1
                    style={{
                      padding: "30px",
                      fontSize: "70px",
                      position: "relative",
                    }}
                  >
                    <b>76</b>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-20px",
                        left: "50%",
                        fontSize: "14px",
                        transform: "translateX(-50%)",
                        color: "#b0bef5",
                      }}
                    >
                      <p>of 100</p>
                    </div>
                  </h1>
                </div>
              </Card.Title>
              <Card.Text>
                <h5 style={{ paddingTop: "20px" }}>Great</h5>
                <p>
                  You scored higher than 65% of <br />
                  the people who have taken
                  <br />
                  these tasks.
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col
            md={6}
            className="summary-column"
            style={{
              padding: "20px",
            }}
          >
            <h5>Summary</h5>
            <Card.Body style={{ paddingTop: "35px" }}>
              <Card.Text>
                <div
                  style={{
                    backgroundColor: "#ffdbdc",
                    height: "50px",
                    borderRadius: "12px",
                    marginBottom: "12px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ color: "hsl(0, 100%, 67%)" }}>
                      <i
                        class="bi bi-lightning-charge"
                        style={{ padding: "7px" }}
                      ></i>
                      <b>Reaction</b>
                    </p>
                    <p style={{ color: "GrayText" }}>
                      <b>80 / 100</b>{" "}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#ffecc2",
                    height: "50px",
                    borderRadius: "12px",
                    marginBottom: "12px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {" "}
                    <p style={{ color: "hsl(39, 100%, 56%)" }}>
                      <i class="bi bi-file-x" style={{ padding: "7px" }}></i>
                      <b>Memory</b>
                    </p>
                    <p style={{ color: "GrayText" }}>
                      <b>92 / 100</b>{" "}
                    </p>
                  </div>
                </div>{" "}
                <div
                  style={{
                    backgroundColor: "#cfffd0",
                    height: "50px",
                    borderRadius: "12px",
                    marginBottom: "12px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ color: "hsl(166, 100%, 37%)" }}>
                      <i class="bi bi-chat-dots" style={{ padding: "7px" }}></i>
                      <b>Verbal</b>
                    </p>
                    <p style={{ color: "GrayText" }}>
                      <b>61 / 100</b>{" "}
                    </p>
                  </div>
                </div>{" "}
                <div
                  style={{
                    backgroundColor: "#edf8fc",
                    height: "50px",
                    borderRadius: "12px",
                    marginBottom: "12px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {" "}
                    <p style={{ color: "#7687cc" }}>
                      <i class="bi bi-eye" style={{ padding: "7px" }}></i>
                      <b>Visual</b>
                    </p>
                    <p style={{ color: "GrayText" }}>
                      <b>72 / 100</b>{" "}
                    </p>
                  </div>
                </div>
              </Card.Text>

              <div className="btn">
                {" "}
                <Button
                  variant=""
                  style={{
                    width: "280px",
                    height: "50px",
                    borderRadius: "26px",
                    marginTop: "20px",
                    backgroundColor: "  hsl(252, 100%, 40%)",
                    color: "white",
                  }}
                >
                  Continue
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Home;
