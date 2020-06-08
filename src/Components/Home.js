import React, { Component } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

import EnemLogo from "./../files/logo_enem.png";
import Verify from "./../files/marca-de-verificacao.png";
import Blue99Logo from "./../files/logo_site.png";
import ContaPronta from "./../files/logo_contapronta.png";

import "./../css/App.css";
import YouTube from "react-youtube";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnAdquirir(e) {}

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12} className="text-center" id="start">
              <Image src={EnemLogo} style={{ width: "70vh", height: "50vh" }} />
              <h1>GUIANDO SUA APROVAÇÃO</h1>
              <h5>POR: BLUE99 - PLATAFORMA DIGITAL</h5>
              <div id="start-textBox">
                <p>
                  'UM MATERIAL COMPLETO, COM METODOLOGIAS ATUAIS E TUDO QUE VOCÊ
                  IRÁ PRECISAR NESSA NOVA JORNADA DE ESTUDOS'
                </p>
              </div>
            </Col>
            <Col className="division" md={12}></Col>
            <Col id="video" md={12} className="text-center">
              <div id="video_yt">
                <YouTube
                  videoId="v5Vrl6kKsrA"
                  opts={{
                    height: "400",
                    width: "100%",
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                />
              </div>

              <h1>ESTUDE CONOSCO</h1>

              <div style={{ width: "50%", margin: "auto", marginTop: "2vw" }}>
                <Row className="text-left">
                  <Col className="item" md={1}>
                    <Image src={Verify} />
                  </Col>
                  <Col className="item" md={11}>
                    <h6>TÉCNICAS INTERATIVAS PARA FACILITAÇÃO;</h6>
                  </Col>
                  <Col className="item" md={1}>
                    <Image src={Verify} />
                  </Col>
                  <Col className="item" md={11}>
                    <h6>METOLOGIAS ATUAIS DE ESTUDO; </h6>
                  </Col>
                  <Col className="item" md={1}>
                    <Image src={Verify} />
                  </Col>
                  <Col className="item" md={11}>
                    <h6>DEZENAS DE MATERIAIS DE APOIO;</h6>
                  </Col>
                  <Col className="item" md={1}>
                    <Image src={Verify} />
                  </Col>
                  <Col className="item" md={11}>
                    <h6> INSTRUÇÕES E PASSO A PASSO;</h6>
                  </Col>
                  <Col className="item" md={1}>
                    <Image src={Verify} />
                  </Col>
                  <Col className="item" md={11}>
                    <h6>INDICAÇÕES DE ASSUNTOS;</h6>
                  </Col>
                  <Col className="item" md={1}>
                    <Image src={Verify} />
                  </Col>
                  <Col className="item" md={11}>
                    <h6>GUIA FÁCIL DE REDAÇÃO;</h6>
                  </Col>
                  <Col className="item" md={1}>
                    <Image src={Verify} />
                  </Col>
                  <Col className="item" md={11}>
                    <h6> MANUAIS DE ESTUDO; E MUITO MAIS!</h6>
                  </Col>
                  <Col md={12} style={{ marginTop: "2vw" }}>
                    <Button
                      variant="adquirir"
                      onClick={(e) => this.btnAdquirir(e)}
                    >
                      APROVEITE O DESCONTO E ADQUIRA AGORA!
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div
          id="quem-somos"
          className="text-center"
          md={12}
          style={{ backgroundColor: "#01619f", marginTop: "6vw" }}
        >
          <Container>
            <Row>
              <Col md={12}>
                <Image src={Blue99Logo}></Image>
              </Col>
              <Col md={12} style={{ marginBottom: "4vw" }}>
                <div style={{ margin: "auto", width: "70%" }}>
                  <h4 style={{ fontSize: "32px" }}>QUEM SOMOS</h4>
                  <p>
                    Através de pesquisas, testes e estudos, iniciamos a
                    plataforma digital BLUE99. Desde 2017 buscamos estudar esse
                    “território” muito explorado e pouco compreendido, chamado
                    ENEM. Seremos seu facilitador, seu guia de estudos online. E
                    nossa obrigação é garantir a melhor experiência possível
                    para seus estudos. E você verá que sempre pensamos nos
                    mínimos detalhes.
                  </p>
                </div>
                <div style={{ margin: "auto", width: "70%" }}>
                  <h4>SEU TEMPO É IMPORTANTE!</h4>
                  <p>
                    Sabendo dessa realidade, e com a intenção de seguir o
                    caminho mais correto possível, te entregamos nosso material
                    de estudo: o ebook com metodologias atualizadas para os dias
                    atuais, pois, sabemos e entendemos que o maior vilão
                    atualmente é o tempo. Então, todas as nossas metodologias,
                    técnicas, e ferramentas estão otimizadas para que você passe
                    o menor tempo possível perdido entre o que será feito e
                    foque apenas na ação do seu estudo.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col className="text-center" id="cenario-atual" md={12}>
              <div style={{ margin: "auto", width: "70%" }}>
                <h3>CENÁRIO ATUAL</h3>
                <p>
                  Bem sabemos de tudo que aconteceu e está acontecendo no mundo.
                  Escolas fecharam, um novo sistema de ensino começou a surgir,
                  escolas no mundo inteiro disponibilizaram aulas online, o
                  sistema de ensino iniciou aí sua maior mudança, pois já não
                  eram possíveis aulas presenciais. Você assim como a maioria
                  está tendo dificuldades para se adaptar ao ensino virtual
                  (EAD)? Somos a solução! Se você está disposto a dar o seu
                  melhor, e conquistar a sua aprovação, confira abaixo a
                  promoção especial que ofertamos a você.
                </p>

                <h2>SEUS SONHOS VALEM TÃO POUCO PARA DESISTIR AGORA?</h2>
                <h1>DIGA NÃO.</h1>
              </div>
              <div style={{ margin: "auto", width: "50%" }}>
                <Button variant="adquirir" onClick={(e) => this.btnAdquirir(e)}>
                  APROVEITE O DESCONTO E ADQUIRA AGORA!
                </Button>
              </div>
            </Col>
            <Col md={12} className="text-center">
              <div className="boxPrice">
                <h6 className="priceText">PREÇO NORMAL</h6>
                <h5 className="priceValue">R$: 106,99</h5>
                <div
                  style={{
                    padding: ".3vw",
                    margin: "auto",
                    width: "80%",
                    marginTop: "2vw",
                    color: "black",
                  }}
                >
                  <h5>ADQUIRA AGORA COM 30% DE DESCONTO</h5>
                  <div style={{ border: "5px solid white" }}>
                    <h1 style={{ fontSize: "64px", margin: "0 1vw 0 0" }}>
                      R$: 74,99
                    </h1>
                    <h6 style={{ margin: "0 0 1vw 0" }}>
                      OU DIVIDA EM ATÉ 12 VEZES COM SEU CARTÃO
                    </h6>
                  </div>

                  <div class="boxButton">
                    <p>
                      E RECEBA MENSALMENTE NOSSOS BÔNUS E CONTEÚDOS ADICIONAIS
                      (SEM ACRÉSCIMOS)
                    </p>
                    <Button
                      variant="adquirir2"
                      onClick={(e) => this.btnAdquirir(e)}
                    >
                      ADQUIRIR AGORA
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center" style={{ backgroundColor: "white" }}>
          <Container>
            <Row>
              <Col md={12}>
                <h1
                  style={{
                    fontFamily: "The Bolt Font, sans-serif",
                    marginTop: "4vw",
                    marginBottom: "3vwF",
                  }}
                >
                  NOSSO CONTEÚDO
                </h1>
              </Col>
              <Col md={12} className="modulos" style={{ marginTop: "1vw" }}>
                <h6>MÓDULO 1 - INTRODUÇÃO AO ESTUDO</h6>
                <div className="division"></div>
                <Row className="text-left modulos_itens">
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>FOLHA DE ROSTO, APRESENTAÇÃO E QUEM SOMOS;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>MANUAL E INSTRUÇÕES DE USO;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>DICAS DE UTILIZAÇÃO E SUAS FUNCIONABILIDADES;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>INTRODUÇÃO;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>MANUAL DE USO;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>METODLOGIAS DISPONÍVEIS;</h6>
                  </Col>
                </Row>
              </Col>
              <Col md={12} className="modulos" style={{ marginTop: "1vw" }}>
                <h6>MÓDULO 2 - METODOLOGIAS DE ESTUDO</h6>
                <div className="division"></div>
                <Row className="text-left modulos_itens">
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>INDICAÇÕES DE VIDEO AULAS;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>LEITURA DE LIVROS, TEXTOSE E ARTIGOS;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>TÉCNICA POMODORO;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>MÉTODO DE ESTUDO ROBINSON (EPL2R);</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>RESUMO DE TEXTOS;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>ELABORAÇÃO DE PERGUNTAS;</h6>
                  </Col>
                </Row>
              </Col>
              <Col md={12} className="modulos" style={{ marginTop: "1vw" }}>
                <h6>MÓDULO 3 - METODOLOGIAS DE REVISÃO</h6>
                <div className="division"></div>
                <Row className="text-left modulos_itens">
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>MODO FOCADO E DIFUSO;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>AUTOEXPLICAÇÃO;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>VIAGENS MENTAIS;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>GRUPO DE REVISÃO VIRTUAL;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>O QUE É, E COMO EVITAR A PROCRASTINAÇÃO;</h6>
                  </Col>
                </Row>
              </Col>
              <Col md={12} className="modulos" style={{ marginTop: "1vw" }}>
                <h6>MÓDULO 6 - ASSUNTOS EXIGIDOS E PROFESSORES RECOMENDADOS</h6>
                <div className="division"></div>
                <Row className="text-left modulos_itens">
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>
                      Linguagens, Códigos e suas Tecnologias;<br></br>GRAMÁTICA,
                      LITERATURA, INGLÊS E ESPANHOL;
                    </h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>
                      Maematíca e suas Tecnologias;<br></br>MATEMÁTICA PARTE 1 E
                      2;
                    </h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>
                      Ciências da Natureza e suas Tecnologias;<br></br>QUÍMICA,
                      FÍSICA E BIOLOGIA;
                    </h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>
                      Ciências Humanas e suas Tecnologias;<br></br>HISTORIA,
                      GEOGRAFIA, FILOSOFIA E SOCIOLOGIA
                    </h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>O QUE É, E COMO EVITAR A PROCRASTINAÇÃO;</h6>
                  </Col>
                </Row>
              </Col>
              <Col
                md={12}
                className="modulos"
                style={{ marginTop: "1vw", marginBottom: "4vw" }}
              >
                <h6>MÓDULO 7 - ASSUNTOS EXIGIDOS E PROFESSORES RECOMENDADOS</h6>
                <div className="division"></div>
                <Row className="text-left modulos_itens">
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>ASSUNTOS EXIGIDOS E PROFESSORA RECOMENDADA;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>COMO SERÁ A REDAÇÃO;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>COMPETÊNCIAS EXIGIDAS;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>EM QUAIS CASOS POSSO TIRAR ZERO NA REDAÇÃO?</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>TABELAS DE PONTUAÇÕES DAS COMPETÊNCIAS;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>DICAS E MACETES IMPORTANTES;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>60 CITAÇÕES QUE PODEM SER USADAS;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>12 ALUSÕES HISTÓRICAS E SUAS PRÉVIAS EXPLICAÇÕES;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>CONSTITUIÇÃO FEDERAL DE 1988 (EM VIGOR);</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>PROIBIÇÕES DURANTE O EXAME;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>OS TEMAS DAS 20 ÚLTIMAS EDIÇÕES DO ENEM;</h6>
                  </Col>
                  <Col md={12}>
                    <Image src={Verify} />
                    <h6>
                      30 TEMAS COM ALTA PROBABILIDADE PARA A REDAÇÃO DE 2020; E
                      MUITO MAIS...!
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col
              className="text-center"
              style={{ marginTop: "3vw", color: "white" }}
              md={12}
            >
              <h1 style={{ fontFamily: "The Bolt Font, sans-serif" }}>BÔNUS</h1>
              <h4
                style={{
                  fontFamily: "The Bolt Font, sans-serif",
                  color: "#d35a2b",
                }}
              >
                PRECISA FAZER COMPRAS OU MOVIMENTAR SEU COMÉRCIO?
              </h4>
              <p style={{ margin: "auto", width: "7F0%" }}>
                Adquira o nosso produto e tenha a oportunidade de receber um
                convite exclusivo para o “CONTA PRONTA” diretamente no seu
                email.
              </p>
              <Image
                src={ContaPronta}
                style={{ margin: "3vw", width: "25vw", height: "20vw" }}
              />
              <p style={{ margin: "auto", width: "70%" }}>
                É uma solução criada para facilitar a vida financeira e atender
                as necessidades de pessoas e empresas de nichos e segmentos
                específicos de mercado. Tudo pelo aplicativo ou internet.
                <br />
                <br />
                Sem burocracia, papelada ou fila. Sem custo de abertura de
                conta, mensalidade ou anuidade. Você só paga tarifa ou encargo
                pelas transações que faz ou por produtos que solicita.
                <br />
                <br />
                Para ter uma conta você precisa receber um convite.
              </p>
            </Col>
            <Col md={12} className="text-center">
              <div className="boxPrice">
                <h6 className="priceText">PREÇO NORMAL</h6>
                <h5 className="priceValue">R$: 106,99</h5>
                <div
                  style={{
                    padding: ".3vw",
                    margin: "auto",
                    width: "80%",
                    marginTop: "2vw",
                    color: "black",
                  }}
                >
                  <h5>ADQUIRA AGORA COM 30% DE DESCONTO</h5>
                  <div style={{ border: "5px solid white" }}>
                    <h1 style={{ fontSize: "64px", margin: "0 1vw 0 0" }}>
                      R$: 74,99
                    </h1>
                    <h6 style={{ margin: "0 0 1vw 0" }}>
                      OU DIVIDA EM ATÉ 12 VEZES COM SEU CARTÃO
                    </h6>
                  </div>

                  <div class="boxButton">
                    <p>
                      E RECEBA MENSALMENTE NOSSOS BÔNUS E CONTEÚDOS ADICIONAIS
                      (SEM ACRÉSCIMOS)
                    </p>
                    <Button
                      variant="adquirir2"
                      onClick={(e) => this.btnAdquirir(e)}
                    >
                      ADQUIRIR AGORA
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
