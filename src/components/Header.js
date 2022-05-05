import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Avatar from "./assets/avatar.png";
import showMore from "./assets/show-icon.png";
import SearchIcon from "./assets/search-icon1.png";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
`;
const HeaderContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-evenly;
`;

const ContainerTitleSummary = styled.section`
  width: 30vw;
  height: 20vh;
  font-size: 1vw;
  margin-right: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  color: #e71b27;
  font-size: 3.2vw;
  padding-left: 2vw;
  text-shadow: 2px 2px 10px #ff0000;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 1s all;
    text-shadow: 2px 2px 14px #ff0000;
  }
`;

const SummaryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
  width: 20vw;
  color: white;
  font-family: Arial;
  position: relative;
`;

const SummaryItemList = styled.li`
  list-style: none;
  color: white;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.4s all;
  }
`;
const Categories = styled.li`
  transition: all 0.8ms;
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.4s all;
  }
`;

const ShowMoreC = styled.img`
  width: 2vw;
`;

const Sections = styled.div`
  color: white;
  height: 12vh;
  width: 10vw;
  background-color: #161a1d;
  margin-top: 16vh;
  border: solid 1px #161a1d;
  position: absolute;
  left: 20vw;
  transition: 0.4s all;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ListItem = styled.li`
  width: 100%;
  height: 3vh;
  border: solid 1px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: black;
    transition: 0.4s all;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const ContainerButtonInput = styled.section`
  width: 45vw;
  height: 20vh;
  margin-left: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MovieAdd = styled.button`
  background-color: #e71b27;
  border: none;
  color: white;
  font-family: Arial;
  width: 8vw;
  height: 4vh;
  font-size: 0.8vw;
  border-radius: 8px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.4s all;
  }
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
`;

const UserButtonBox = styled.div`
  width: 6vw;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const UserLog = styled.img`
  height: 2.4vw;
`;

const ShowMore = styled.img``;

export default class App extends React.Component {
  state = {
    menu: false
  };

  handleMenu = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  render() {
    return (
      <HeaderContainer>
        <GlobalStyle />
        <ContainerTitleSummary>
          <Title>Todoflix</Title>
          <SummaryList>
            <MenuLink to="/Home">
              <SummaryItemList>Início</SummaryItemList>
            </MenuLink>
            <Categories onClick={this.handleMenu}>
              Categorias
              <ShowMoreC
                src={showMore}
                onClick={this.handleMenu}
                alt="show more"
              />
            </Categories>
          </SummaryList>
          {this.state.menu && (
            <Sections>
              <List>
                <ListItem>
                  <MenuLink to="/All">Todos</MenuLink>
                </ListItem>
                <ListItem>
                  <MenuLink to="/RecentlySeen">Já vistos</MenuLink>
                </ListItem>
                <ListItem>
                  <MenuLink to="/Highlights">Destaques</MenuLink>
                </ListItem>
                <ListItem>
                  <MenuLink to="/Favorit">Favoritos</MenuLink>
                </ListItem>
              </List>
            </Sections>
          )}
        </ContainerTitleSummary>

        <ContainerButtonInput>
          <MovieAdd>Adicionar filme</MovieAdd>
          <Search type="text" placeholder="Pesquisar" />
          <UserButtonBox>
            <UserLog src={Avatar} alt="ícone de usuário" />
            <ShowMore src={showMore} alt="Opções" />
          </UserButtonBox>
        </ContainerButtonInput>
      </HeaderContainer>
    );
  }
}
