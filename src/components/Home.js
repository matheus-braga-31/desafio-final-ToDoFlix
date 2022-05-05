import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Highlights from "./Highlights";
import RecentlySeen from "./RecentlySeen";

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

export default class Home extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <RecentlySeen />
        <Highlights />
      </>
    );
  }
}
