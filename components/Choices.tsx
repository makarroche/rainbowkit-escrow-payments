import { Button, Col, Container, Row } from "react-bootstrap";

type Choices = {
  names: string[];
};

const Choices = ({ names }: Choices) => {

  const secondColumnStart = Math.floor(names.length/2);

  return (
    <Container>
            <Row className="mt-1 text-center">
            {names &&
             names.slice(0,secondColumnStart).map((name: string) => {
              return (
                <Col>
                  <Button className="choicesButton">{name}</Button>
                </Col>
             )})
            }
            </Row>
            <Row className="mt-1 text-center">
            {names &&
             names.slice(secondColumnStart).map((name: string) => {
              return (
                <Col>
                  <Button className="choicesButton">{name}</Button>
                </Col>
             )})
            }
            </Row>
    </Container>
  );
};

export default Choices;
