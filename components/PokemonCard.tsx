import { Button, Card, Row } from "react-bootstrap";
import Choices from "../components/Choices";
import { getPokemon, getPokemonDetails } from "../api/calls";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useContractWrite } from "wagmi";
import { contractEscrowAddress } from "../contract/address";

type PokemonCard = {
  name?: string;
  image?: string;
}

type name = {
  id: number
  name: string 
}

const PokemonCard = () => {
  const contractABI = require("../contract/abi.json");
  const [choiceNames, setChoiceNames] = useState<name[]>();
  const { data: corePokemon, error} = useQuery("postsData", getPokemon);
  const [pokemon, setPokemon] = useState<PokemonCard>();
  const [choice, setChoice] = useState(false);

  const { data, isError, isSuccess, write, isLoading } = useContractWrite({
    address: contractEscrowAddress,
    abi: contractABI,
    functionName: "givePrize",
  });

  useEffect(() => {
    if(corePokemon)
      getChoicesNames();
  }, [corePokemon]);

  useEffect(() => {
    if(choiceNames && choiceNames.length>0)
      getWinnerPokemon();
  }, [choiceNames]);

  useEffect(() => {
    if(choice) giveTokensToWinner();
  }, [choice]);

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
    const image = await getPokemonDetails(winner.id+1)
    setPokemon ({ ...pokemon,name: winner.name, image: image });
  }

  const handlePlayAgain = () => {
    setChoice(false);
    getChoicesNames();
    setPokemon(undefined);
  }

  const giveTokensToWinner = () => {
    write();
  }

  return(
    <>
    <Card className="cardImg border-0" style={{ width: '28rem'}}>
      <div id="card-container">
      <Card.Img variant="top" src="/images/WhatIsThisPokemon.png"/>
      <img height = "200px" id ={ !choice ? "pokemon-shadow" : "pokemon-show"} src={pokemon?.image}/>
      </div>
      <Card.Body className="card-body-ad ">
        <Card.Title className="text-center mt-2 mb-4">{!choice ? "Who's that Pokemon?" : `It's ${pokemon?.name} !`}</Card.Title>
        {!choice ? <Choices names={choiceNames} pokemon={pokemon?.name} setChoice={setChoice}></Choices> : 
        <Row><Button onClick={handlePlayAgain}>Play Again</Button></Row>}
      </Card.Body>
    </Card>
</>)
    ;
}

export default PokemonCard;