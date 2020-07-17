import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Button,
} from "reactstrap";

export default function AboutUs() {
  return (
    <Container>
      <h1 className="title" style={{ textAlign: "center", padding: 15 }}>
        Despre noi
      </h1>
      <Row>
        <Col md="6">
          <Card className="card-profile card-plain">
            <div className="card-avatar">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img alt="..." src={require("assets/img/faces/and1.jpg")} />
              </a>
            </div>
            <CardBody>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <div className="author">
                  <CardTitle tag="h4">Andrei Ionescu</CardTitle>
                  <h6 className="card-category">Fotograf</h6>
                </div>
              </a>
              <p className="card-description text-center">
                Sunt Ionescu Andrei, fotograf din Craiova, tratez fotografia ca
                forma de artă nu doar o afacere. Am petrecut ani buni
                perfecționându-mi setul de abilități și încercând mereu să mă
                împing către noi limite. Scopul meu este să spun o poveste
                atemporală cu munca mea. Sunt extrem de pasionat de meșteșugul
                meu și iubesc posibilitatea ca fotografiile mele să poată
                transporta oamenii înapoi în timp pentru a-și retrăi una dintre
                cele mai importante zile din viata.
              </p>
            </CardBody>
            <CardFooter className="text-center">
              <Button
                className="btn-just-icon btn-neutral"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
              <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col md="6">
          <Card className="card-profile card-plain">
            <div className="card-avatar">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img alt="..." src={require("assets/img/faces/ion.jpg")} />
              </a>
            </div>
            <CardBody>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <div className="author">
                  <CardTitle tag="h4">Ionut Dinu</CardTitle>
                  <h6 className="card-category">Videograf</h6>
                </div>
              </a>
              <p className="card-description text-center">
                Salut. Numele meu este Ionuț, pasiunea pentru videografia de
                nunta am dobandit-o incepand cu 2005. De atunci incerc mereu sa
                perfectionez stilul de filmare si montaj. Imi place sa ne
                aventuram in orice tip de proiect si in afara sferei de filmari
                de nunta sau botez. Imbratisam cu drag si filmarea de evenimente
                corporate, publicitate sau orice alt tip de film !Cu fiecare
                eveniment ne propunem sa ne auto-depasim prin metode noi de
                filmare si editare video.
              </p>
            </CardBody>
            <CardFooter className="text-center">
              <Button
                className="btn-just-icon btn-neutral"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
              <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
