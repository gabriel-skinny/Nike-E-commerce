import React from 'react';

import { Container, Content, Details, Footer } from './styles';
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import Header from "../../components/Header"
import shoeImg from "../../assets/shoe.png"
import nikeLogo from "../../assets/nikeOpacity.png"

function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="text">
          <div className="middle">
            <h1>NIKE</h1>
            <h2>JUST DO IT.</h2>
          </div>

          <img class="shoe" src={shoeImg} alt="shoe"/>

          <div className="footer">
            <h1>2019</h1>
            <h1>AIR MAX</h1>
            <h1>270</h1>
          </div>
        </div>
      </Content>

      <Details>
        <img src={nikeLogo} alt=""/>

        <Footer>
          <div className="box">
            <div className="svg">
              <FaChevronUp fill="#000"/>
            </div>

            <div className="item">
              <h1>Air Max</h1>
              <b>270</b>

              <h4>$199</h4>
            </div>

            <div className="squares">
              <div className="square blue"></div>
              <div className="square red"></div>
              <div className="square green"></div>
              <div className="square gray"></div>
              <div className="square black"></div>
            </div>

            <div className="carts">
              <div className="size">
                <FaChevronDown fill="#ccc"/>
                <h1>SIZE</h1>
              </div>
              <h1 class="add">ADD TO CART</h1>
            </div>
          </div>

          <div className="social-media">
            <h3>Facebook</h3>
            <h3>Twitter</h3>
            <h3>Instagram</h3>
          </div>
        </Footer>
      </Details>
    </Container>
  );
}

export default Main;