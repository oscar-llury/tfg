import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Tooltip,
  Tab,
  Tabs,
} from "react-bootstrap";
//import Highlight, { defaultProps } from "prism-react-renderer";
//import theme from "prism-react-renderer/themes/vsLight";

import logo_wcag from "../img/wcag-hta-logo.svg";
import slide1 from "../img/main-normas-accesibilidad.png";
import perceivable from "../img/perceivable.png";
import operable from "../img/operable.png";
import understandable from "../img/understandable.png";
import robust from "../img/robust.png";

import eye_perceivable from "../img/eye_perceivable.png";
import hand_operable from "../img/hand_operable.png";
import head_understandable from "../img/head_understandable.png";
import like_robust from "../img/like_robust.png";
/*
import anillo from "../img/4-Principios-anillo.png";
import centro from "../img/4-Principios-centro.png";
import ojo from "../img/4-Principios-ojo.png";
import oido from "../img/4-Principios-oido.png";
import cerebro from "../img/4-Principios-cerebro.png";
import mano from "../img/4-Principios-mano.png";
*/
export default function NormasAccesibilidadWeb() {
  const [tab, setTab] = useState("perceivable");
  const tabs = ["perceivable", "operable", "understandable", "robust"];
  const [heightTabsNav, setHeightTabNav] = useState(200);

  useEffect(() => {
    setHeightTabNav(
      document.querySelector(".container-tabs .content").offsetHeight
    );
  }, []);

  function prev(e) {
    e.preventDefault();
    let dest = tabs.indexOf(tab) - 1;
    if (dest < 0) {
      dest = tabs.length - 1;
    }

    dest = tabs[dest];
    setTab(dest);
  }
  function next(e) {
    e.preventDefault();
    let dest = tabs.indexOf(tab) + 1;
    if (dest > tabs.length - 1) {
      dest = 0;
    }

    dest = tabs[dest];
    setTab(dest);
  }

  return (
    <Container fluid className="app-normas-accesibilidad p-0">
      <Container fluid className="px-2 main-image">
        <h1>
          W3C
          <br /> & <br />
          WCAG
        </h1>
        <img className="w-100" src={slide1} alt="" />
      </Container>
      <Container fluid="sm" className="main-container">
        <Row className="section-1">
          <div className="bg"></div>
          <Col
            xl="4"
            lg="3"
            md={{ order: "first", span: 4 }}
            xs={{ order: "last", span: 8 }}
            className="col-sello"
          >
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  [WAI Accessibility Guidelines] that are [W3C Recommendations]
                  are [Web Standards]
                </Tooltip>
              }
            >
              <img
                alt="Web Content Accessibility Guidelines (WCAG)"
                src={logo_wcag}
              />
            </OverlayTrigger>
          </Col>
          <Col
            xl="8"
            lg="9"
            md={{ order: "last", span: 8 }}
            xs={{ order: "first", span: 12 }}
            className="col-info"
          >
            <h2>
              Est??ndares de <br /> accesibilidad web
            </h2>
            <p>
              <strong>W3C</strong> es un consorcio internacional que desarrolla
              los W3C Recommendations, est??ndares internacionales para el World
              Wide Web.
            </p>
            <p>
              <strong>Web Accessibility Initiative (WAI)</strong> es un grupo de
              trabajo del W3C destinado a ayudar a comprender e implementar la
              accesibilidad web.
            </p>
            <p>
              <strong>Web Content Accessibility Guidelines (WCAG)</strong> son
              las directrices de accesibilidad al contenido web, publicadas por
              WAI, y que pertenecen a los est??ndares W3C.
            </p>

            <p>
              Las WCAG se dividen en cuatro Principios de accesibilidad y trece
              Pautas, agrupando los distintos Criterios de conformidad.
            </p>
            <p>
              El grado de accesibilidad WCAG de una p??gina web se mide en
              Criterios de conformidad verificables, que se agrupan en tres
              niveles: A, AA, y AAA.
            </p>
            <p>
              La ??ltima versi??n es WCAG 2.1 publicada el 5 de junio de 2018.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 section-2">
          <h2>Los 4 Principios de la Accesibilidad</h2>
          <p>
            POUR (Perceivable, Operable, Understandable, Robust): los cuatro
            principios que describen la accesibilidad funcional.
          </p>

          <div className="grid-pour text-center">
            <div>
              <img src={eye_perceivable} alt="" />

              <img src={hand_operable} alt="" />

              <img src={head_understandable} alt="" />

              <img src={like_robust} alt="" />
            </div>
          </div>

          <div className="container-tabs">
            <a
              className="prev"
              role="button"
              tabIndex="0"
              onClick={prev}
              href="#"
              style={{ height: heightTabsNav }}
            >
              <i className="bi bi-chevron-left"></i>
            </a>
            <a
              className="next"
              role="button"
              tabIndex="0"
              onClick={next}
              href="#"
              style={{ height: heightTabsNav }}
            >
              <i className="bi bi-chevron-right"></i>
            </a>
            <div className="content">
              <Tabs
                activeKey={tab}
                onSelect={(k) => {
                  setTab(k);
                }}
                id="uncontrolled-tab-example"
                className="justify-content-around tablist p-0"
              >
                <Tab eventKey="perceivable" title="Perceptible">
                  <section>
                    <Row>
                      <Col
                        xl="7"
                        lg="7"
                        md={{ order: "last", span: 12 }}
                        xs={{ order: "last", span: 12 }}
                      >
                        <img src={perceivable} alt="" className="w-100"></img>
                      </Col>
                      <Col
                        xl="5"
                        lg="5"
                        md={{ order: "first", span: 12 }}
                        xs={{ order: "first", span: 12 }}
                      >
                        <h3>Perceptible</h3>
                        <p>
                          La informaci??n y los componentes de la interfaz de
                          usuario deben ser presentados al usuario de tal forma
                          que sean perceptibles.
                        </p>
                        <p>
                          El objetivo es ofrecer diversas formas de sentir, ver
                          y escuchar el contenido web, como el ajuste del tama??o
                          de letra, la visualizaci??n de subt??tulos en un v??deo,
                          o la escucha del texto alternativo de una imagen en un
                          tel??fono inteligente.
                        </p>
                        <p>
                          Un contenido perceptible har?? posible que todos los
                          usuarios vean y escuchen la informarci??n.
                        </p>
                        <Button variant="primary" className="w-auto" href="#">
                          Ver pautas <i className="bi bi-arrow-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </Tab>
                <Tab eventKey="operable" title="Operable">
                  <section>
                    <Row>
                      <Col
                        xl="7"
                        lg="7"
                        md={{ order: "last", span: 12 }}
                        xs={{ order: "last", span: 12 }}
                      >
                        <img src={operable} alt="" className="w-100"></img>
                      </Col>
                      <Col
                        xl="5"
                        lg="5"
                        md={{ order: "first", span: 12 }}
                        xs={{ order: "first", span: 12 }}
                      >
                        <h3>Operable</h3>
                        <p>
                          Los componentes de la interfaz y navegaci??n web deben
                          ser operables con variedad de herramientas.
                        </p>
                        <p>
                          El objetivo es ofrecer diversas formas de navegaci??n
                          en la p??gina web. Personas con discapacidades f??sicas
                          o visuales utilizan herramientas de lectura de texto y
                          navegaci??n que necesitan de cierta informaci??n en los
                          elementos html para funcionar correctamente.
                        </p>
                        <p>
                          Un contenido operable ayudar?? a todos los usuarios a
                          navegar por la informaci??n de forma independiente,
                          indistintamente de la herramienta usada.
                        </p>
                        <Button variant="primary" className="w-auto" href="#">
                          Ver pautas <i className="bi bi-arrow-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </Tab>
                <Tab eventKey="understandable" title="Entendible">
                  <section>
                    <Row>
                      <Col
                        xl="7"
                        lg="7"
                        md={{ order: "last", span: 12 }}
                        xs={{ order: "last", span: 12 }}
                      >
                        <img
                          src={understandable}
                          alt=""
                          className="w-100"
                        ></img>
                      </Col>
                      <Col
                        xl="5"
                        lg="5"
                        md={{ order: "first", span: 12 }}
                        xs={{ order: "first", span: 12 }}
                      >
                        <h3>Entendible</h3>
                        <p>
                          La informaci??n y la operaci??n de la interfaz de
                          usuario deben ser entendibles.
                        </p>
                        <p>
                          El objetivo es representar, transmitir y traducir la
                          informaci??n y funcionalidad web de distintas formas,
                          de manera que sea m??s intuitivo, consistente y
                          sencillo; como la traducci??n de idiomas o los
                          audiolibros en los dispositivos m??viles.
                        </p>
                        <p>
                          Un lenguaje claro y conciso facilitar?? la comprensi??n
                          por parte de los usuarios en todos los dispositivos.
                        </p>
                        <Button variant="primary" className="w-auto" href="#">
                          Ver pautas <i className="bi bi-arrow-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </Tab>
                <Tab eventKey="robust" title="Robusto">
                  <section>
                    <Row>
                      <Col
                        xl="7"
                        lg="7"
                        md={{ order: "last", span: 12 }}
                        xs={{ order: "last", span: 12 }}
                      >
                        <img src={robust} alt="" className="w-100"></img>
                      </Col>
                      <Col
                        xl="5"
                        lg="5"
                        md={{ order: "first", span: 12 }}
                        xs={{ order: "first", span: 12 }}
                      >
                        <h3>Robusto</h3>
                        <p>
                          El contenido web debe debe funcionar lo
                          suficientemente bien en todas las plataformas,
                          navegadores y dispositivos para que sea independiente
                          a la tecnolog??a de uso que el usuario elija.
                        </p>
                        <p>
                          El ojetivo es proporcionar metadatos descriptivos y
                          contenidos accesibles y usables para que todos
                          usuarios y tecnolog??as de asistencia puedan
                          comprenderlos.
                        </p>
                        <p>
                          Un contenido robusto se adaptar?? a las necesidades y
                          preferencias de los usuarios sin importar desde d??nde
                          accedan.
                        </p>
                        <Button variant="primary" className="w-auto" href="#">
                          Ver pautas <i className="bi bi-arrow-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </Tab>
              </Tabs>
            </div>
          </div>
        </Row>
        {/*
        <Row className="mt-5 section-3">
          <Col style={{ position: "relative", height: "516px" }}>
            <div id="anillo">
              <img src={anillo} />
            </div>
            <div id="centro">
              <img src={centro} />
            </div>
            <div id="ojo">
              <img src={ojo} />
            </div>
            <div id="oido">
              <img src={oido} />
            </div>
            <div id="cerebro">
              <img src={cerebro} />
            </div>
            <div id="mano">
              <img src={mano} />
            </div>
          </Col>
        </Row>
              */}
      </Container>
    </Container>
  );
}
