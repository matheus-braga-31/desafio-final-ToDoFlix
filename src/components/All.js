import React from "react";
import ReactStars from "react-rating-stars-component";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Like from "./assets/like.png";
import ThumbIcon from "./assets/thumbIcon.png";
import SearchIcon from "./assets/search-icon1.png";

import ShrekPost from "./assets/ShrekG.png";
import HEQVSPost from "./assets/HEQVSG.png";
import ShawShankRedemptionPost from "./assets/SonhoG.png";
import QHEVPost from "./assets/QHEVG.png";
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

const AllContainer = styled.div`
  width: 100%;
  margin-top: 10vh;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Search = styled.input`
  width: 25vw;
  height: 4vh;
  border-radius: 8px;
  border: none;
  text-align: center;
  background-image: url(${SearchIcon});
  background-size: 1.5vw;
  background-repeat: no-repeat;
  background-position: 1.5vw;
  position: absolute;
  top: 8.1vh;
  right: 10.5vw;
`;

const TitleBox = styled.div`
  height: 10vh;
  width: 100vw;
  color: white;
  padding: 0 0 5vh 5vw;
`;

const AllBox = styled.section`
  height: 60vh;
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
  left: 25vw;
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
  width: 20vw;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default class ALl extends React.Component {
  state = {
    InfoAllMovies: [
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
        poster: AGSVO,
        favorit: Like,
        title: "A gente se vê ontem",
        description:
          "Dois jovens-prodígios tentam dominar a arte da viagem no tempo, mas um tiroteio trágico acaba os colocando em uma série de situações perigosas no passado",
        avarage: "-",
        avarageIcon: ThumbIcon
      },
      {
        poster: Anima,
        favorit: Like,
        title: "Anima",
        description:
          "Thom Yorke, do Radiohead, é a estrela desse curta musical de visual estonteante, com direção de Paul Thomas Anderson. É melhor deixar o som bem alto",
        avarage: "-",
        avarageIcon: ThumbIcon
      },
      {
        poster: Estomago,
        favorit: Like,
        title: "Estômago",
        description:
          "De um boteco simples a um restaurante renomado... à cela da prisão. A jornada de um talentoso cozinheiro em São Paulo é cheia de surpresas",
        avarage: "-",
        avarageIcon: ThumbIcon
      }
    ],
    filtredMovies: []
  };

  async componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    this.setState({
      filtredMovies: this.state.InfoAllMovies,
      InfoAllMovies: this.state.InfoAllMovies
    });
  };

  filtrarFilmes = (event) => {
    const { InfoAllMovies } = this.state;

    if (event.target.value === "") {
      this.setState({
        filtredMovies: InfoAllMovies
      });
      return;
    }
    const filmesFiltradosConvertidos = this.state.InfoAllMovies.filter(
      (item) => {
        if (
          item.title.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          return true;
        }
      }
    );

    this.setState({
      filtredMovies: filmesFiltradosConvertidos
    });
  };

  render() {
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

    return (
      <AllContainer>
        <GlobalStyle />
        <Search
          onChange={this.filtrarFilmes}
          type="text"
          placeholder="Pesquisar"
        />
        <TitleBox>
          <h1>Todos</h1>
          {/* <img src={this.state.InfoAllMovies[0].poster} alt="jas"/> */}
        </TitleBox>
        {this.state.filtredMovies.map((item) => (
          <AllBox>
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
          </AllBox>
        ))}
      </AllContainer>
    );
  }
}
