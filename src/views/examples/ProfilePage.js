import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/and1.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Andrei Ionescu <br />
              </h4>
              <h6 className="description">Fotograf</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Deoarece timpul trece mai repede decât ne așteptăm, fotografiile
                vor fi amintiri ce vor dura toată viața. Pentru a cere
                informații adiționale asupra unei oferte, vă invit cu drag să mă
                contactați.
              </p>
              <br />
              <h1 className="title">Contact</h1>
              <h4>Telefon : 0768370788 </h4>
              <h4>Email: ofiice@goldenlens.ro</h4>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <br />
        </Container>
      </div>
      <IndexNavbar />

      <div className="main">
        <div className="section text-center"></div>
        <div className="section section-dark text-center">
          <div className="section landing-section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="text-center">Keep in touch?</h2>
                  <Form className="contact-form">
                    <Row>
                      <Col md="6">
                        <label>Name</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <label>Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="text" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label>Message</label>
                    <Input
                      placeholder="Tell us your thoughts and feelings..."
                      type="textarea"
                      rows="4"
                    />
                    <Row>
                      <Col className="ml-auto mr-auto" md="4">
                        <Button className="btn-fill" color="danger" size="lg">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
