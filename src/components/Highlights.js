import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Carousel from "react-elastic-carousel";
import ReactStars from "react-rating-stars-component";

import Like from "./assets/like.png";
import ThumbIcon from "./assets/thumbIcon.png";
import ShrekPost from "./assets/ShrekG.png";
import HEQVSPost from "./assets/HEQVSG.png";
import ShawShankRedemptionPost from "./assets/SonhoG.png";
import Ponyo from "./assets/ponyo.png";
import QHEVPost from "./assets/QHEVG.png";
import SpiderVersePost from "./assets/SpiderG.png";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
  }`;

const HighlightsContainer = styled.div`
  background-color: black;
`;

const TitleBox = styled.div`
  height: 10vh;
  color: white;
  padding: 5vh 0 5vh 5vw;
`;

const HighlightsBox = styled.section``;

const PosterBox = styled.div`
  position: relative;
`;

const Poster = styled.img`
  width: 25vw;
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

const DescriptionBoxHL = styled.div`
  color: white;
`;

export default class Highlights extends React.Component {
  state = {
    InfoMoviesHighlights: [
      {
        poster: ShrekPost,
        favorit: Like,
        title: "Shrek",
        description:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
        avarage: "4/5",
        avarageIcon: ThumbIcon
      },
      {
        poster: HEQVSPost,
        favorit: Like,
        title: "Hoje eu quero voltar sozinho",
        description:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
        avarage: "-",
        avarageIcon: ThumbIcon
      },
      {
        poster: ShawShankRedemptionPost,
        favorit: Like,
        title: "Sonho de liberdade",
        description:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
        avarage: "4,5/5",
        avarageIcon: ThumbIcon
      },

      {
        poster: Ponyo,
        favorit: Like,
        title: "Ponyo",
        description:
          "Um garoto de 5 anos chamado Sosuke fica amigo de uma princesa peixinho-dourado chamada Ponyo, que quer desesperadamente virar humana",
        avarage: "-",
        avarageIcon: ThumbIcon
      },

      {
        poster: QHEVPost,
        favorit: Like,
        title: "Que horas ela volta",
        description:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
        avarage: "-",
        avarageIcon: ThumbIcon
      },
      {
        poster: SpiderVersePost,
        favorit: Like,
        title: "Spider-man",
        description:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
        avarage: "3/5",
        avarageIcon: ThumbIcon
      }
    ]
  };

  render() {
    return (
      <HighlightsContainer>
        <GlobalStyle />
        <TitleBox>
          <h1>Destaques</h1>
        </TitleBox>
        <Carousel
          itemsToShow={3}
          pagination={false}
          itemsToScroll={3}
          enableAutoPlay={true}
          enableSwipe={true}
        >
          {this.state.InfoMoviesHighlights.map((item) => (
            <HighlightsBox>
              <PosterBox>
                <Poster src={item.poster} alt="Banner do filme" />
                <Favorit src={item.favorit} alt="Ícone de favorito" />
              </PosterBox>
              <TitleAvarageBox>
                <MovieName>{item.title}</MovieName>
                <AvarageBox>
                  <ReactStars {...MovieAvarage} />
                </AvarageBox>
              </TitleAvarageBox>
              <DescriptionBoxHL>{item.description}</DescriptionBoxHL>
            </HighlightsBox>
          ))}
        </Carousel>
      </HighlightsContainer>
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
