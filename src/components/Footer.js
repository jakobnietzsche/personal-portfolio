import { Container, Row, Col } from "react-bootstrap";
import linkedInIcon from "../assets/images/linkedin-icon.svg";
import gitHubIcon from "../assets/images/github-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={linkedInIcon} alt="Icon" /></a>
              <a href="#"><img src={gitHubIcon} alt="Icon" /></a>
              <a href="#"><img src={instagramIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}