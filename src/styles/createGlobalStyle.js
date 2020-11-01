import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&family=PT+Sans+Narrow&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    font-family: 'PT Sans Narrow', sans-serif;
  }

  body{
    width: 80%;
    margin: auto;
    margin-top: 70px;
    background-color: #f5f5f5;
  }

  ul{
    list-style: none;
  }
`