import React from "react";
import ReactStars from "react-rating-stars-component";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Like from "./assets/like.png";
import SpiderVersePost from "./assets/SpiderG.png";
import Ponyo from "./assets/ponyo.png";
import AGSVO from "./assets/agsvo.png";
import Anima from "./assets/anima.png";
import Estomago from "./assets/estomago.png";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
  }`;

const FavoritContainer = styled.div`
  width: 100%;
  margin-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TitleBox = styled.div`
  height: 10vh;
  width: 100vw;
  color: white;
  padding: 5vh 0 5vh 5vw;
`;

const FavoritBox = styled.section`
  height: 55vh;
  margin-bottom: 5vh;
  background-color: #161a1d;
  padding-top: 3vh;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.4s all;
  }
`;

const PosterBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Poster = styled.img`
  width: 25vw;
  border-radius: 2px;
  object-fit: contain;
  position: relative;
`;

const Favorit = styled.img`
  width: 1.5vw;
  margin-bottom: 2vh;
  position: absolute;
  left: 1vw;
  top: 0.5vh;
`;

const ContentBox = styled.div`
  height: 50%;
  width: 30vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const TitleAvarageBox = styled.div`
  width: 25vw;
  display: flex;
  justify-content: space-between;
`;

const MovieName = styled.h2`
  color: white;
`;

const AvarageBox = styled.div`
  width: 6vw;
  display: flex;
  justify-content: space-between;
`;

const DescriptionBox = styled.div`
  color: white;
  font-size: 1vw;
  width: 25vw;
`;

export default class Favorites extends React.Component {
  state = {
    InfoFavoritMovies: [
      {
        poster: SpiderVersePost,
        favorit: Like,
        title: "Spider-man",
        description:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        poster: Ponyo,
        favorit: Like,
        title: "Ponyo",
        description:
          "Um garoto de 5 anos chamado Sosuke fica amigo de uma princesa peixinho-dourado chamada Ponyo, que quer desesperadamente virar humana"
      },
      {
        poster: AGSVO,
        favorit: Like,
        title: "A gente se vê ontem",
        description:
          "Dois jovens-prodígios tentam dominar a arte da viagem no tempo, mas um tiroteio trágico acaba os colocando em uma série de situações perigosas no passado"
      },
      {
        poster: Anima,
        favorit: Like,
        title: "Anima",
        description:
          "Thom Yorke, do Radiohead, é a estrela desse curta musical de visual estonteante, com direção de Paul Thomas Anderson. É melhor deixar o som bem alto"
      },
      {
        poster: Estomago,
        favorit: Like,
        title: "Estômago",
        description:
          "De um boteco simples a um restaurante renomado... à cela da prisão. A jornada de um talentoso cozinheiro em São Paulo é cheia de surpresas"
      }
    ]
  };

  render() {
    return (
      <FavoritContainer>
        <GlobalStyle />
        <TitleBox>
          <h1>Favoritos</h1>
        </TitleBox>
        {this.state.InfoFavoritMovies.map((item) => (
          <FavoritBox>
            <PosterBox>
              <Poster src={item.poster} alt="Banner do filme" />
              <Favorit src={item.favorit} alt="Ícone de favorito" />
            </PosterBox>
            <ContentBox>
              <TitleAvarageBox>
                <MovieName>{item.title}</MovieName>
                <AvarageBox>
                  <ReactStars {...MovieAvarage} />
                </AvarageBox>
              </TitleAvarageBox>
              <DescriptionBox>{item.description}</DescriptionBox>
            </ContentBox>
          </FavoritBox>
        ))}
      </FavoritContainer>
    );
  }
}

const MovieAvarage = {
  size: 18,
  count: 5,
  isHalf: false,
  value: 4,
  color: "yellow",
  activeColor: "red",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  }
};
