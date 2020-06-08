import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Spinner,
} from "react-bootstrap";
import Axios from "axios";

import "./css/parceiro.css";

import facebook from "./../files/facebook.svg";
import instagram from "./../files/instagram-esbocado.svg";
import youtube from "./../files/youtube.svg";
import { Link, Redirect } from "react-router-dom";

class Parceiros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      content: null,
      error: null,
      loaded: false,
    };
  }

  componentDidMount() {
    Axios.request({
      url: `http://127.0.0.1:8000/api/partner/${this.state.name}`,
      method: "GET",
      responseType: "json",
    })
      .then(
        (result) => {
          if (result.request.response.status === "success") {
            console.log(result.request.response);
            this.setState({
              loaded: true,
              content: result.request.response[0],
            });
          } else {
            this.setState({
              loaded: true,
              error: result.request.response.message,
            });
          }
        },
        (error) => {
          this.setState({
            loaded: true,
            error: error.message,
          });
        }
      )
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { loaded, content, error } = this.state;
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
        <section style={{ backgroundColor: "#131313" }}>
          <Container>
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
                <h2 id="title">Parceiro {content.title} </h2>
                <p id="description">
                  Nessa página você escolherá em qual parceiro você irá comprar.
                  Ou se já foi adquirido você tem direito a inscrever-se no
                  sorteio do parceiro no qual você adquiriu nosso produto.
                </p>
              </Col>
              <Col
                md={12}
                className="par-container"
                style={{ marginTop: "6vw", marginBottom: "6vw" }}
              >
                <div className="par-body">
                  <Row>
                    <Col md={3} className="text-center">
                      <Image
                        src={content.profile}
                        roundedCircle
                        width="200"
                        height="200"
                      />
                      <div class="redes">
                        <a href={content.facebook}>
                          <img src={facebook} />
                        </a>
                        <a href={content.instagram}>
                          <img src={instagram} />
                        </a>
                        <a href={content.youtube}>
                          <img src={youtube} />
                        </a>
                      </div>
                    </Col>
                    <Col md={9}>
                      <h6 className="par-title">{content.title}</h6>
                      <div
                        dangerouslySetInnerHTML={{ __html: content.content }}
                      ></div>
                    </Col>
                    <Col md={12}>
                      <Row className="justify-content-end">
                        <Col lg={{ span: 3, offset: 7 }} md={{ span: 3, offset: 7 }}>
                          <div style={{ width: "100%" }}>
                            <a class="par-btn adquirir" href="#">
                              ARQUIRIR - EBOOK
                            </a>
                          </div>
                        </Col>
                        <Col md={{ span: 2 }}>
                          <div style={{ width: "100%" }}>
                            <Link class="par-btn adquirir" to="/sorteios">
                              PARTICIPAR
                            </Link >
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
    }
  }
}
export default Parceiros;
