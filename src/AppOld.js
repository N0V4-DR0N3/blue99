import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Row,
  Col,
  Spinner,
  Modal,
  Form,
} from "react-bootstrap";
import Axios from "axios";

import logo from "./files/logo_site.png";
import image_enviar from "./files/enviar.svg";

import image_facebook from "./files/facebook.svg";
import image_instagram from "./files/instagram-esbocado.svg";
import image_youtube from "./files/youtube.svg";

import "./css/menu.css";
import "./css/footer.css";

import Home from "./templates/Home.js";
import Parceiros from "./templates/Parceiros";
import Sorteio from "./templates/Sorteio";

import Cron from "./templates/DeCron";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: null,
      partners: null,
      modal: false,
      date: new Date(0, 0, 0, 0, 5, 60),
      countdown: [
        {
          unit: "days",
          value: "",
        },
        {
          unit: "hours",
          value: "",
        },
        {
          unit: "mins",
          value: "",
        },
        {
          unit: "secs",
          value: "",
        },
      ],
    };
  }

  componentDidMount() {
    this.time = setInterval(() => this.tick(), 1000);

    Axios.request({
      url: `http://127.0.0.1:8000/api/partner`,
      method: "GET",
      responseType: "json",
    }).then(
      (result) => {
        if (result.request.response.status === "success") {
          this.setState({
            loaded: true,
            modal: true,
            content: result.request.response.partner,
          });
        }
      },
      (error) => {
        this.setState({
          modal: true,
          loaded: true,
        });
      }
    );
  }

  formEmail(e) {
    e.preventDefault();
    Axios.request({
      url: "http://127.0.0.1:8000/api/promotion",
      method: "POST",
      responseType: "json",
      data: {
        email: e.target.email.value,
      },
    }).then(
      (result) => {
        if (result.request.response.status === "success") {
          this.setState({
            modal: !this.state.modal,
          });
        }
      },
      (error) => {}
    );
  }

  tick() {
    let distance = this.state.date - new Date().Now;
    let countdown = this.state.countdown;

    //Days
    countdown[0].value = parseInt(distance / (60 * 60 * 24), 10);
    // Hours
    countdown[1].value = parseInt((distance % (60 * 60 * 24)) / (60 * 60), 10);
    // Minutes
    countdown[2].value = parseInt((distance % (60 * 60)) / 60, 10);
    // Seconds
    countdown[3].value = parseInt(distance % 60, 10);

    this.setState((prevState, props) => ({
      countdown,
    }));
  }

  render() {
    const { loaded, content, modal, countdown, date } = this.state;

    if (!loaded) {
      return (
        <Container className="text-center">
          <Spinner
            animation="border"
            role="status"
            variant="danger"
            style={{ marginTop: "10vw", marginBottom: "10vw" }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      );
    } else {
      return (
        <Router>
          <div className="wrapper">
            <Navbar
              bg=""
              expand="lg"
              className="sub-navbar justify-content-between"
            >
              <Container>
                <Navbar.Brand>
                  <img href="#" src={logo}></img>
                </Navbar.Brand>
                <Row className="justify-content-end">
                  <Button
                    className="adquirir"
                    variant="adquirir"
                    style={{
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                  >
                    <Cron duracao={"5"} start={true}></Cron>
                  </Button>
                  <Button
                    className="adquirir"
                    variant="adquirir"
                    style={{
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    Quero Adquirir
                  </Button>
                </Row>
              </Container>
            </Navbar>
            <Navbar expand="lg">
              <Container>
                <Navbar.Toggle arial-controls="menu" />
                <Navbar.Collapse id="menu">
                  <Nav>
                    <Link
                      to={{ pathname: "/", hash: "#home" }}
                      className="nav-link"
                      type="button"
                    >
                      INÍCIO
                    </Link>
                    <Link
                      to={{ pathname: "/", hash: "#home" }}
                      className="nav-link"
                      type="button"
                    >
                      O QUE É
                    </Link>
                    <Link
                      to={{ pathname: "/", hash: "#sobre" }}
                      className="nav-link"
                      type="button"
                    >
                      QUEM SOMOS
                    </Link>
                    <NavDropdown title="PARCEIROS" id="m_parceiros">
                      {content.map((item, index) => (
                        <NavDropdown.Item
                          key={index}
                          href={"/parceiro/" + item}
                        >
                          {item}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                    <Link to="/sorteios" className="nav-link" type="button">
                      SORTEIOS
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/parceiro/:name" component={Parceiros} />
              <Route path="/sorteios" component={Sorteio} />
            </Switch>

            <section id="email-footer" style={{ backgroundColor: "#90c2e1" }}>
              <img alt="email" src={image_enviar} width="30" height="30" />
              <h5>suporte@blue99.com.br</h5>
              <p>
                Envie-nos seu feedback, dúvida, crítica ou reclamação e <br />
                iremos responder o mais rápido possivel.
              </p>
            </section>

            <footer>
              <Container>
                <Row>
                  <Col md={3}>
                    <h6 className="footer-title">Páginas</h6>
                    <div
                      style={{
                        backgroundColor: "#ffc107",
                        height: "2px",
                        width: "15%",
                        marginTop: "0",
                      }}
                    ></div>
                    <ul className="footer-nav">
                      <li className="footer-item">
                        <Link
                          className="footer-link"
                          to={{ pathname: "/", hash: "#home" }}
                        >
                          Início
                        </Link>
                      </li>
                      <li className="footer-item">
                        <a
                          className="footer-link"
                          href="{{ Route::has('parceiro') ? route('parceiro', [ 'name' => 'Vinicius Rodrigues' ]) : '' }}"
                        >
                          Parceiros
                        </a>
                      </li>
                      <li className="footer-item">
                        <a
                          className="footer-link"
                          href="{{ Route::has('sorteios') ? route('sorteios') : '' }}"
                        >
                          Sorteios
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}></Col>
                  <Col md={3}>
                    <h6 className="footer-title">
                      <b>Redes Sociais</b>
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
          </div>

          <Modal
            show={modal}
            onHide={() => this.setState({ modal: !this.state.modal })}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                RECEBA NOSSA CORTESIA (GRÁTIS)
                <small
                  style={{ marginTop: "0", display: "block", fontSize: "10px" }}
                >
                  Nosso produto não esta incluso na cortesia grátis
                </small>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{ color: "black", fontSize: "14px" }}>
                Receba novidades, informações sobre o enem, promoções, materiais
                de apoio, conteudos e mais... Tudo em seu e-mail. 100% Grátis
              </p>
              <Form onSubmit={(e) => this.formEmail(e)}>
                <Form.Group>
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Insira seu melhor e-mail"
                    autoComplete="off"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="text-right">
                  <Form.Control type="submit" value="Receber"></Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        </Router>
      );
    }
  }
}

export default App;
