import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import CaptainFantastic from "./assets/CaptainG.png";
import Like from "./assets/like.png";
import ThumbIcon from "./assets/thumbIcon.png";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;

    body{
    background-color: black;
  }
  }`;

const RecentlySeenContainer = styled.div`
  width: 80%;
  padding-top: 30vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.4s all;
  }
`;

const Banner = styled.img`
  width: 30vw;
`;

const InfoBox = styled.div`
  height: 20vh;
  padding-left: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Favorit = styled.img`
  width: 1.5vw;
  margin-bottom: 2vh;
`;

const Watched = styled.h2`
  color: white;
  font-size: 1.5vw;
`;

const Title = styled.h1`
  color: white;
  font-size: 2vw;
`;

const DescriptionBox = styled.div`
  width: 28vw;
  font-size: 1vw;
`;

const Description = styled.p`
  color: white;
`;

const AvarageBox = styled.div`
  width: 5vw;
  display: flex;
  justify-content: space-around;
`;

const Avarage = styled.p`
  color: white;
  font-size: 1.2vw;
  font-weight: bolder;
`;

const Thumb = styled.img`
  width: 1.5vw;
`;

const RecentlySeen = () => {
  return (
    <RecentlySeenContainer>
      <GlobalStyle />
      <Banner src={CaptainFantastic} alt="Capa de Capitão Fantástico" />
      <InfoBox>
        <Favorit src={Like} alt="Favoritar" />
        <Watched>Visto recentemente</Watched>
        <Title>Capitão Fantástico</Title>
        <DescriptionBox>
          <Description>
            Nas florestas do estado de Washington, um pai cria seus seis filhos
            longe da civilização, em uma rígida rotina de aventuras. Ele é
            forçado a deixar o isolamento e leva sua família para encarar o
            mundo, desafiando sua ideia do que significa ser pai.
          </Description>
        </DescriptionBox>
        <AvarageBox>
          <Avarage>4/5</Avarage>
          <Thumb src={ThumbIcon} alt="Curtiu" />
        </AvarageBox>
      </InfoBox>
    </RecentlySeenContainer>
  );
};

export default RecentlySeen;
