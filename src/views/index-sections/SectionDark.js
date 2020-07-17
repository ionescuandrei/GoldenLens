import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">
                Echipă profesionistă formată din fotograf și videograf, gata
                oricând să transforme amintirile tale în cele mai frumoase
                fotografii, albume și videoclipuri.
              </h2>
              <p className="description">
                Vă oferim servicii de fotografie si videografie pentru o gamă
                diversă de evenimente: fotografie de eveniment (nunta, botez),
                sedinte foto (logodna, copii, familie, maternitate, fashion,
                etc). Suntem specializati în fotografia de nunta. Va putem oferi
                și alte servicii foto în funcție de necesitățile dumneavoastră.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
