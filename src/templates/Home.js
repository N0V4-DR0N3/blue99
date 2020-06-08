import React, { Component } from "react";
import { Container, Row, Col, Button, Card, Carousel, Image } from "react-bootstrap";
import YouTube from "react-youtube";

import "./css/home.css";

import logo_enem from "./../files/logo_enem.png";
import estrela from "./../files/estrela.svg";
import ebook from "./../files/ebook.png";

import logo_site from "./../files/logo_site.png";
import image_default from "./../files/1.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: false,
    };
  }

  btnAdquirir(e) {
    console.log(e);
  }

  btnSorteios(e) {
    console.log(e);
  }

  render() {
    const { members } = this.state;

    return (
      <div>
        <section id="home" style={{ backgroundColor: "#131313" }}>
          <Container>
            <Row className="justify-content-center">
              <Col className="inline" md={10}>
                <img src={logo_enem} />
              </Col>
              <Col className="inline" md={8}>
                <p>
                  Nosso produto é seu próprio professor por assim dizer. Só que
                  com uma diferença: Tudo pode ser feito no conforto da sua
                  casa, com velocidade, facilidade e metodologias atuais que são
                  competências e requisitos essenciais para se dar bem no enem.
                  Ou seja, o E-ENEM 2020 é como um professor particular virtual.
                </p>
              </Col>
              <Col
                className="inline"
                md={8}
                style={{ marginTop: "2vw", marginBottom: "6vw" }}
              >
                <YouTube
                  videoId="v5Vrl6kKsrA"
                  opts={{
                    height: "400",
                    width: "100%",
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                ></YouTube>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="conteudos" style={{ backgroundColor: "#00609b" }}>
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <h2 style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                  Conteúdos
                </h2>
              </Col>
              <Col
                md={12}
                style={{
                  textAlign: "center",
                  marginTop: "1vw",
                  marginBottom: "2vw",
                }}
              >
                <Button
                  size="sm"
                  className="adquirir"
                  variant="adquirir"
                  onClick={(e) => this.btnAdquirir(e)}
                >
                  Quero Adquirir
                </Button>
              </Col>

              <Col md={4}>
                <Card
                  style={{
                    backgroundColor: "#ffc107",
                    border: "1px solid #ffc107",
                    borderRadius: "0",
                    marginBottom: "6vw",
                    padding: "1vw",
                  }}
                >
                  <h6 className="text-center" style={{ margin: "2vw" }}>
                    REGRAS E CONTEÚDO ESSENCIAL
                  </h6>{" "}
                  <p style={{ textAlign: "justify", color: "black" }}>
                    Você sabe como estudar para o enem desde de casa? <br />
                    Primeiramente você deve saber três coisas: Onde, Quando e
                    Como?
                    <br />
                    <br />
                    <b>Onde?</b> Totalmente Online - Totalmente em casa. <br />
                    <b>Quando?</b> No seu tempo livre ou disponível para
                    estudos. <br /> <b>Como?</b> Através das ferramentas que já
                    estão disponiveis na internet.
                    <br />
                    <br />
                    Mas além disso iremos te guiar no processo de aprendizado.
                    Com todas nossas: técnicas, metodologias, conteúdos e
                    materias.
                  </p>
                </Card>
              </Col>

              <Col md={4}>
                <Card
                  style={{
                    backgroundColor: "#ffc107",
                    border: "1px solid #ffc107",
                    borderRadius: "0",
                    padding: "1vw",
                    marginBottom: "6vw",
                  }}
                >
                  <h6 className="text-center" style={{ margin: "2vw" }}>
                    METODOLOGIAS
                  </h6>{" "}
                  <p style={{ textAlign: "justify", color: "black" }}>
                    {" "}
                    Metodologia é definida como estudo dos métodos, ou seja, a
                    orática dos caminhos para chegar a um determinado fim. Que
                    tem o objetivo analisar as caracteristicas dos vários
                    métodos indispensáveis, tais como: avaliar capacidades,
                    limitações e criticar os pressupostos quando sua utilização.
                    Entenda, o conteúdo está todo na internet! Você precisa
                    saber onde, quando e como estudar. Quais são as regras?
                    Quanto tempo de estudo é necessario? Qual a melhor
                    metodologia de aprendizagem para mim? Quais os requisitos
                    exigidos? Dicas, Macetes, Conteúdos Essenciais. E é isso que
                    irá resultar na sua aprovação no Enem 2020.{" "}
                  </p>
                </Card>
              </Col>

              <Col md={4} style={{ marginBottom: "4vw" }}>
                <Card
                  style={{
                    backgroundColor: "#ffc107",
                    border: "1px solid #ffc107",
                    borderRadius: "0",
                    padding: "1vw",
                    marginBottom: "6vw",
                  }}
                >
                  <h6 className="text-center" style={{ margin: "2vw" }}>
                    CONTEÚDO NO GERAL+ (BÔNUS)
                  </h6>{" "}
                  <p style={{ textAlign: "justify", color: "black" }}>
                    Somos o E-Enem 2020! Um material composta por: vários
                    metodologias atuais de estudo, indicações de assuntos que
                    vão cair, guia fácil de redação de materiais de apoio para
                    impressão, citações e alusões para usar sua redação, além da
                    indicação dos melhores professores de cada matéria exigida
                    no exame, e muito mais!
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="show_de_premios" style={{ backgroundColor: "red" }}>
          <section id="show_de_premios_c"></section>

          <Container>
            <Row className="justify-content-center">
              <Col md={8} style={{ textAlign: "center" }}>
                <h2
                  style={{
                    fontFamily: "The Bold Font, sans-serif",
                    fontSize: "64px",
                    color: "#ffc107",
                    padding: "0",
                    marginTop: "5vw",
                    marginBottom: "0",
                    textShadow: "0 0.1em 0.1em #8d6a00",
                  }}
                >
                  SHOW DE PRÊMIOS
                </h2>
                <div id="estrelas">
                  <img src={estrela} />
                  <img src={estrela} />
                  <img src={estrela} />
                  <img src={estrela} />
                  <img src={estrela} />
                </div>
              </Col>
              <Col md={10} style={{ textAlign: "center", marginTop: "1vw" }}>
                <p
                  style={{
                    fontFamily: "Oswold, sans-serif",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "white",
                    letterSpacing: ".01em",
                    marginBottom: "0",
                  }}
                >
                  QUE TAL CONCORRER A PRÊMIOS? COMPRANDO CONOSCO VOCÊ PODE!
                </p>
                <p
                  style={{
                    fontFamily: "Oswold, sans-serif",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "white",
                    letterSpacing: ".01em",
                    marginTop: "0",
                  }}
                >
                  APÓS A PROVA, NADA MELHOR QUE CURTIR BONS MOMENTOS, IREMOS
                  PROPORCIONAR ISSO!
                </p>

                <div className="buttons" style={{ marginBottom: "3vw" }}>
                  <Button
                    variant="adquirir"
                    onClick={(e) => this.btnAdquirir(e)}
                  >
                    ADQUIRIR E PARTICIPAR
                  </Button>
                  <Button
                    variant="adquirir"
                    onClick={(e) => this.btnSorteios(e)}
                  >
                    VER PRÊMIOS
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          id="e-book"
          style={{ backgroundColor: "#00609b", color: "black" }}
        >
          <Container className="text-center" style={{}}>
            <Row className="justify-content-center">
              <Col md={12}>
                <h2 style={{ marginTop: "2vw" }}>Ebook E-ENEM 2020::</h2>
              </Col>
              <Col md={4} style={{ marginTop: "2vw" }}>
                <h6>INOVANDO</h6>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#131313",
                    opacity: ".5",
                    marginBottom: "1vw",
                  }}
                ></div>
                <p>
                  Inovação significa criar algo novo. A palavra é derivada do
                  termo latino innovatio, e se refere a uma ideia, metodo ou
                  objeto que é criado e que pouco se parece com padrões
                  anteriores.
                  <br /> Acreditamos que parte do resultado é conquistado "fora
                  da caixa".
                  <br /> Se você não consegue estudar com determinada
                  metologodia convencional não pense duas vezes! OUSE! Você deve
                  ser o (a) protagonista da sua própria vida. Por isso, nossa
                  inovação é uma apresentação interativa de VÁRIAS metodlogias
                  que obtem o maior resultado segundo estudos nacionais e
                  internacionais feitos com milhares de alunos. Você devera
                  seguir a técnica/metodologia que mais te dá resultado! Não
                  apenas seguir o convencional e acabar ficando para trás...
                </p>
              </Col>
              <Col md={4} style={{ marginTop: "2vw" }}>
                <h6>FACILITAÇÃO</h6>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#131313",
                    opacity: ".5",
                    marginBottom: "1vw",
                  }}
                ></div>
                <p>
                  Facilitação tem a ver com entender e guiar pessoas nos
                  processos de aprendizagem e nos processos de tomada de decisão
                  e resolução de problemas. Além disso, facilitação busca criar
                  esgajamento, inclusão, propriedade, troca de conhecimento e
                  ajuda pessoas e grupos a crescerem.
                  <br /> Chega de "balelas"! Iremos ter entregar o conteúdo mais
                  direto, objetivo, essencial e com maior facilitação possivel.
                  <br /> Quanto menos um conteudo ou material é otimização, mais
                  tempo você perde tentando entender como funciona, ou colocando
                  em prática técnicas subjetivas e pouco diretas.
                </p>
              </Col>
              <Col md={4} style={{ marginTop: "2vw" }}>
                <h6>ADAPTAÇÃO</h6>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#131313",
                    opacity: ".5",
                    marginBottom: "1vw",
                  }}
                ></div>
                <p>
                  Os processos de adaptação, passam por quatro fases
                  importantes: "eu preciso fazer a mudança", "eu quero fazer a
                  mudança", "eu sei fazer a mudança" e "eu faço a mudança".
                  <br /> No mundoi globalizado que estamos vivendo, toda
                  informação necessária já esta disponivel na internet. E como
                  já falamos, você so precisa saber: ONDE, QUANDO e COMO estudar
                  para o enem? <br />
                  Por isso, somos: Seu guia, seu manual de estudos, seu
                  instrutor online e nosso material irá te ajudar nas quatro
                  fases importântes da adaptação.
                </p>
              </Col>
              <Col md={8} style={{ marginTop: "2vw", marginBottom: "6vw" }}>
                <YouTube
                  videoId="VxaMjr2f3YQ"
                  opts={{
                    height: "400",
                    width: "100%",
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                ></YouTube>
              </Col>
            </Row>
          </Container>
        </section>

        <Image src={ebook} style={{ width: "100%" }} onClick={ (e) => { alert('Eae'); }}></Image>

        <section id="sobre" style={{ backgroundColor: "#131313" }}>
          <Container>
            <Row className="justify-content-center">
              <Col
                className="text-center"
                md={12}
                id="sobre-attributes"
                style={{ marginTop: "10vw" }}
              >
                <h2 className="art-title">Quem Somos</h2>
                <img className="art-img" src={logo_site} alt="Logo Blue99" />
                <p className="art-description" style={{}}>
                  A BLUE99 surgiu depois de destudos e pesquisas. Nós não
                  poderiamos ser uma plataforma sem ter o fundamento necessário
                  para fazer "chegar ao seu destino" (a aprovação no enem). Para
                  entendermos como traçar esse caminho, estamos desde 2017
                  realizando as provas do enem, coletando dados, aplicando
                  técnicas, fazendo testes... Enfim. Tudo isso para que nossa
                  plataforma seja a mais verdadeira, direta, e focada apenas no
                  seu ensino. Não queremos te encher de conteúdos somente para
                  extrair todo mês uma quantia de dinheiro dos estudantes! Por
                  isso, nosso preço é acessivel, completo e fixo. Todas nossas
                  parcerias e sócios estão diretamente focados na ampliação dos
                  ensinamentos e no custo-beneficio do nosso material. Agora
                  você sabe um pouco sobre nós. Quer conhecer a gente
                  individualmente? Clique no botão abaixo. Agora quer conhecer
                  realmente nosso propósito? Adquira nosso material.
                </p>
              </Col>
              <Col md={8} lg={8} className="text-center">
                <Carousel id="fotos">
                  <Carousel.Item>
                    <img
                      src={image_default}
                      alt="Image Default"
                      width="100%"
                      height="350vw"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={image_default}
                      alt="Image Default"
                      width="100%"
                      height="350vw"
                    />
                  </Carousel.Item>
                </Carousel>

                <Button
                  className="art-button"
                  style={{ marginTop: "2vw", marginBottom: "4vw" }}
                  onClick={(e) => {
                    this.setState({ members: !members });
                  }}
                >
                  Conheça nossos integrantes
                </Button>
              </Col>
              <Col
                md={12}
                id="integrantes"
                style={{
                  marginBottom: "4vw",
                  display: members === true ? "inline" : "none",
                }}
              >
                <Row className="justify-content-center">
                  <Col md={4}>
                    <Card>
                      <div className="i-img">
                        <img src={image_default} />
                      </div>
                      <div className="i-description">
                        <h6 style={{ fontFamily: "Oswold, sans-serif" }}>
                          Web Designer
                        </h6>
                        <label style={{ fontFamily: "Oswold, sans-serif" }}>
                          Vinícius Rodrigues
                        </label>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
