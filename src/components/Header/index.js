import React from 'react';

import { Container, Left, Right } from './styles';
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa"
import nikeLogo from "../../assets/nikewhites.svg"

function Header() {
  return (
    <Container>
      <Left>
        <img src={nikeLogo} alt="nikeLogo"/>

        <ul>
          <li className="active">Men</li>
          <li>Women</li>
          <li>Boys</li>
          <li>Girls</li>
          <li>New animals</li>
        </ul>
      </Left>
      <Right>
        <li><FaSearch size={25} fill="#000"/></li>
        <li class="cart"><FaShoppingCart size={25} fill="#000"/></li>
        <li><FaBars size={25} fill="#000"/></li>
      </Right>
    </Container>
  );
}

export default Header;