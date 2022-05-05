import React from "react";

import Home from "./components/Home";
import Header from "./components/Header";
import All from "./components/All";
import Favorit from "./components/Favorit";
import Highlights from "./components/Highlights";
import RecentlySeen from "./components/RecentlySeen";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    body{
      background-color: black;
    }
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RecentlySeen" element={<RecentlySeen />} />
          <Route path="/Highlights" element={<Highlights />} />
          <Route path="/All" element={<All />} />
          <Route path="/Favorit" element={<Favorit />} />
        </Routes>
      </Router>
    );
  }
}
