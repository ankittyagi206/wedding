import React from "react";
import ParticleBackground from "./ParticleBackground";
import "./App.css";
import BackgroundMusic from "./BackgroundMusic";
import circles from "./Assets/circles.png";
import Menu from "./Menu";
import { Container, Row, Col } from "react-bootstrap";
import { colorMix } from "tsparticles";
import Map from "./Map";
import Cards from "./Cards";
function App() {
  return (
    <div>
      <div className="mycontainer">
        <Menu />
        <ParticleBackground />
        <div
          id="header"
          style={{
            position: "absolute",
            top: "50px",
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Container>
            <Row>
              <Col
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                xs={12}
                md={4}
                lg={3}
              >
                <img src={circles} alt="side-img" className="sideImage" />
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  color: "#fff",
                  justifyContent: "center",
                }}
                xs={12}
                md={4}
                lg={6}
              >
                <p style={{ fontSize: "60px" }}> Shweta </p>
                <p style={{ fontSize: "30px" }}> weds </p>
                <p style={{ fontSize: "60px" }}> Gopal </p>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                xs={12}
                md={4}
                lg={3}
              >
                <img src={circles} alt="side-img" className="sideImage2" />
              </Col>
            </Row>
          </Container>
        </div>

        <BackgroundMusic />
      </div>

      <Container>
        <Row>
          <Cards />
        </Row>
        <Row>
          <Map />
        </Row>
      </Container>
    </div>
  );
}

export default App;
