import React, { Component } from "react";
import { Container, Row, Col, Form, Spinner, Modal } from "react-bootstrap";
import { cpf } from "cpf-cnpj-validator";

import "./css/sorteio.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class Sorteio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: null,
      content: null,
      cpf: "",
      modal: false,
      modalText: "",
    };
  }

  componentDidMount() {
    Axios.request({
      url: "http://127.0.0.1:8000/api/sweepstakes",
      responseType: "json",
      method: "GET",
    }).then(
      (result) => {
        // console.log(result);
        if (result.request.response.status === "success") {
          this.setState({
            loaded: true,
            content: result.request.response.sweepstakes,
          });
        } else {
          this.setState({
            error: "<h1>Não existe sorteios em andamento.</h1>",
          });
        }
      },
      (error) => {
        this.setState({
          error: error.message,
        });
      }
    );
  }

  formatCPF(e) {
    this.setState({ cpf: cpf.format(e.target.value) });
  }

  formSubmit(e) {
    e.preventDefault();
    Axios.request({
      url: "http://127.0.0.1:8000/api/sweepstakes",
      method: "POST",
      responseType: "json",
      data: {
        name: e.target.name.value,
        email: e.target.email.value,
        cpf: this.state.cpf,
        artist: e.target.artist.value,
      },
    }).then(
      (result) => {
        this.setState({
          modal: !this.state.modal,
          modalText: result.request.response.message,
        });
      },
      (error) => {}
    );
  }

  render() {
    const { loaded, error, content, cpf, modal, modalText } = this.state;
    if (error) {
      return <Redirect to="/"></Redirect>;
    } else if (!loaded) {
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
        <div>
          <section style={{ backgroundColor: "#131313" }}>
            <Container>
              <Row className="justify-content-center">
                {content.map((item, index) => (
                  <Col md={8} style={{ marginTop: "2vw" }} key={index}>
                    <Row className="justify-content-center">
                      <Col md={12}>
                        <h3>Sorteios do Artista {item.title}</h3>
                        <p>Você estará concorrendo a "{item.awards}"</p>
                      </Col>
                      <Col md={12}>
                        <div className="f-body">
                          <Form
                            method="POST"
                            onSubmit={(e) => this.formSubmit(e)}
                          >
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="name"
                                placeholder="Nome cadastrado no Hortmart*"
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Control
                                type="email"
                                name="email"
                                placeholder="E-mail cadastrado no hortmart*"
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="cpf"
                                value={cpf}
                                onChange={(e) => this.formatCPF(e)}
                                placeholder="CPF cadastrado no hortmart*"
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Control
                                type="number"
                                name="artist"
                                value={item.reference}
                                hidden
                              ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                              <Form.Control
                                type="submit"
                                className="btn-submit"
                                value="Eu li e aceito participar"
                              ></Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
          <Modal show={modal} onHide={false}>
            <Modal.Header closeButton>
              <Modal.Title>Alerta</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p style={{ color: "black", fontFamily: "Oswold, sans-serif" }}>
                {modalText}
              </p>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}
export default Sorteio;
