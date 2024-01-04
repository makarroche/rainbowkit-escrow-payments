import { Button, Card } from "react-bootstrap";
import Choices from "../components/Choices";
import { getPokemon, getPokemonDetails } from "../api/calls";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

type PokemonCard = {
  name?: string;
  image?: string;
}

const PokemonCard = () => {
  const [choiceNames, setChoiceNames] = useState([]);
  const { data: corePokemon, error, isLoading } = useQuery("postsData", getPokemon);
  const [pokemon, setPokemon] = useState<PokemonCard>();

  useEffect(() => {
    if(corePokemon)
      getChoicesNames();
  }, [corePokemon]);

  useEffect(() => {
    if(choiceNames.length>0)
      getWinnerPokemon();
  }, [choiceNames]);


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
    ({id: id, name: getPokemonName(id)}))
    setChoiceNames(choice_names as []);
  }

  const getWinnerPokemon = async () => {
    const randomId = getRandomNumber(0,3);
    const winner = choiceNames[randomId];
    const image = await getPokemonDetails(winner.id)
    setPokemon ({...pokemon, image: image });
    setPokemon({...pokemon, name: winner.name});
  }

  return(
    <>
    <Card className="cardImg border-0" style={{ width: '28rem'}}>
      <Card.Img variant="top" src="/images/WhatIsThisPokemon.png"/>
      <Card.Body className="card-body-ad ">
        <Card.Title className="text-center mt-2 mb-4">Who's that Pokemon?</Card.Title>
        <Card.Text>This pokemon loves bla bla bla</Card.Text>
        <Choices names={choiceNames} pokemon={pokemon as string}></Choices>
      </Card.Body>
    </Card>
    </>)
    ;
}

export default PokemonCard;