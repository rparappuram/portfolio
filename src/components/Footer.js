import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-5">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ryanparappuram/"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a target="_blank" href="https://github.com/rparappuram">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>I look forward to connect. Thank you!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
