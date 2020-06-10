import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

import image_enviar from "./files/enviar.svg";
import image_facebook from "./files/facebook.svg";
import image_instagram from "./files/instagram-esbocado.svg";
import image_youtube from "./files/youtube.svg";

import Home from "./Components/Home.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar style={{ backgroundColor: "#007fcf" }} expand="lg">
          <Container>
            <Navbar.Toggle arial-controls="menu" />
            <Navbar.Collapse id="menu">
              <Nav>
                <Link
                  to={{
                    pathname: "/",
                    hash: "#start",
                  }}
                  className="nav-link"
                  type="button"
                >
                  INÍCIO
                </Link>
                <Link
                  to={{ pathname: "", hash: "#quem-somos" }}
                  className="nav-link"
                  type="button"
                >
                  O QUE É
                </Link>
                <Link
                  to={{ pathname: "", hash: "#sobre" }}
                  className="nav-link"
                  type="button"
                >
                  QUEM SOMOS
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
        <div
          className="text-center"
          id="email-footer"
          style={{ backgroundColor: "#90c2e1", padding: "3vh" }}
        >
          <img alt="email" src={image_enviar} width="30" height="30" />
          <h5>suporte@blue99.com.br</h5>
          <p>
            Envie-nos seu feedback, dúvida, crítica ou reclamação e <br />
            iremos responder o mais rápido possivel.
          </p>
        </div>

        <footer>
          <Container>
            <Row>
              <Col md={9} lg={9} sm={12} xs={12}></Col>
              <Col md={3} lg={3} sm={12} xs={12} style={{ marginTop: "2vw" }}>
                <h6
                  style={{
                    fontFamily: "The Bolt Font, sans-serif",
                    color: "white",
                  }}
                >
                  Redes Sociais
                </h6>
                <div
                  style={{
                    backgroundColor: "#ffc107",
                    height: "2px",
                    width: "15%",
                    marginTop: "0",
                  }}
                ></div>
                <div style={{ marginTop: "1vw" }}>
                  <a href="#" style={{ marginLeft: ".2vw" }}>
                    <img src={image_facebook} width="30" height="30" />
                  </a>
                  <a href="#" style={{ marginLeft: ".2vw" }}>
                    <img src={image_instagram} width="30" height="30" />
                  </a>
                  <a href="#" style={{ marginLeft: ".2vw" }}>
                    <img src={image_youtube} width="30" height="30" />
                  </a>
                </div>
              </Col>
              <Col
                md={12}
                className="text-center"
                style={{
                  marginTop: "2vw",
                  marginBottom: "2vw",
                  color: "white",
                  fontFamily: "Arial, cursive",
                }}
              >
                <h5 style={{ fontSize: "14px" }}>
                  {" "}
                  Blue99 © Todos os direitos reservados.
                </h5>
              </Col>
            </Row>
          </Container>
        </footer>
      </Router>
    );
  }
}

export default App;
