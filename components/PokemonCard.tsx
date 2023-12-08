import { Button, Card } from "react-bootstrap";
import Choices from "../components/Choices";

const PokemonCard = () => {
  let names = ["Pikachu", "Squirtle", "Vulpix", "Ninetails"];
  return(
    <Card className="cardImg border-0" style={{ width: '28rem', height: '26rem'}}>
      <Card.Img variant="top" src="/images/WhatIsThisPokemon.png"/>
      <Card.Body className="card-body-ad ">
        <Card.Title className="text-center mt-2 mb-4">Who's that Pokemon?</Card.Title>
        <Choices names={names} ></Choices>
      </Card.Body>
    </Card>);
}

export default PokemonCard;