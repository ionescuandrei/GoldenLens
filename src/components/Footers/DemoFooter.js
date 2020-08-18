import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://www.fotografi-cameramani.ro/andrei-ionescu_5043">
                  <img
                    alt="..."
                    src={require("assets/img/webimg/logo-footer.png")}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCrtKV3gow1UGB8RG0YMQcTA">
                  <img
                    style={{ width: 170, height: 43 }}
                    alt="..."
                    src={require("assets/img/webimg/youtube.png")}
                  />
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            © Toate drepturile sunt rezervate Golden Lens Studio 2020
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
