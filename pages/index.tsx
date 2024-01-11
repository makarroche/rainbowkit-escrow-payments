import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useAccount, useContractWrite } from "wagmi";
import Head from "next/head";
import { contractEscrowAddress } from "../contract/address";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home: NextPage = () => {
  const contractABI = require("../contract/abi.json");

  const { address, isConnected } = useAccount();

  const { data, isError, isLoading, isSuccess, write } = useContractWrite({
    address: contractEscrowAddress,
    abi: contractABI,
    functionName: "startGame",
    args: [address],
  });

  useEffect(() => {
    if(isConnected) {
    write();
    console.log(data);
    debugger
    }
  }, [isConnected, data]);




  return (
    <>
      <Container fluid className="container-color">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs={4} className="mt-5">
            <div className="ms-5">
              <ConnectButton></ConnectButton>
            </div>
          </Col>
        </Row>
        <Row className="text-left mt-5 ms-2">
          <Header></Header>
        </Row>
        <Row className="justify-content-center mt-5 mb-5">
          <PokemonCard></PokemonCard>
        </Row>
        <Row></Row>
        <Row className="text-left fun-footer">
          <Footer></Footer> 
        </Row>
      </Container>
    </>
  );
};

export default Home;
