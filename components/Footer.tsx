import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="ms-5 ">
      <Row className="justify-content-end">
        <Col md="auto">
        <div className="vr border border-1 mt-1"></div></Col>
        <Col xs={6}>
          Made with love just for fun in the blockchain space
          <img
            className="ms-2"
            src="/stars.svg"
            alt="Bootstrap"
            width="20"
            height="20"
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
