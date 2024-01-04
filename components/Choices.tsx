import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

type name = {
  id: number
  name: string 
}

type Choices = {
  names: [];
  pokemon: string;
};

const Choices = ({ names, pokemon }: Choices) => {

  const secondColumnStart = Math.floor(names.length/2);
  const [choice, setChoice] = useState();

  const checkChoice = (name: string) => {
    if(name === pokemon){
      //winns
    }
    else {
      //loses
    }
  }

  return (
    <Container className="mt-5">
            <Row className="mt-1 text-center">
            {names &&
             names.slice(0,secondColumnStart).map((item: name) => {
              return (
                <Col>
                  <Button className="choicesButton" onClick = {()=>checkChoice(item.name)}>{item.name}</Button>
                </Col>
             )})
            }
            </Row>
            <Row className="mt-1 text-center">
            {names &&
             names.slice(secondColumnStart).map((item: name) => {
              return (
                <Col>
                  <Button className="choicesButton" onClick = {()=>checkChoice(item.name)}>{item.name}</Button>
                </Col>
             )})
            }
            </Row>
    </Container>
  );
};

export default Choices;
