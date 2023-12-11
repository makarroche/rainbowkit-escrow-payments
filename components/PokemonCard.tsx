import { Button, Card } from "react-bootstrap";
import Choices from "../components/Choices";
import { getPokemon } from "../api/calls";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const PokemonCard = () => {
  const [choice_names, setChoice_names] = useState([]);
  const { data: corePokemon, error, isLoading } = useQuery("postsData", getPokemon);
  const [pokemon, setPokemon] = useState();

  const getRandomNumber = ( min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getPokemonIds = () => {
    return [...Array(4)].map(() => getRandomNumber(1, 151));
  }

  const getPokemonName = (id: number) => {
    return corePokemon?.results[id]?.name;
  }

  const getChoicesNames = () => {
    const choices_id = getPokemonIds();
    const choice_names = choices_id.map((id: number) => 
      getPokemonName(id))
    setChoice_names(choice_names as []);
  }

  const getWinnerPokemon = () => {
    const winner = choice_names[getRandomNumber(0,3)];
    setPokemon(winner)
  }

  useEffect(() => {
    if(corePokemon) getChoicesNames()
  }, [corePokemon]);

  return(
    <>
    <Card className="cardImg border-0" style={{ width: '28rem'}}>
      <Card.Img variant="top" src="/images/WhatIsThisPokemon.png"/>
      <Card.Body className="card-body-ad ">
        <Card.Title className="text-center mt-2 mb-4">Who's that Pokemon?</Card.Title>
        <Card.Text>This pokemon loves bla bla bla</Card.Text>
        <Choices names={choice_names} ></Choices>
      </Card.Body>
    </Card>
    </>)
    ;
}

export default PokemonCard;