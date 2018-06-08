import React from 'react';
import styled from 'styled-components';

import IconLink, { ReactComponent as Icon } from './../_assets/images/icons/chicken.svg'

const Left = styled.nav`
  background: url(${require('./../_assets/images/left-bg.jpg')}) center center/cover;
  padding-left: 5rem;
  padding-right: 4rem;
  padding-top: 5rem;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  color: #ffffff;
  font-family: "Montserrat";
  font-size: 2.4rem;
  font-weight: 400;
  height: 5.2rem;
  padding-left: 3rem;
  margin-bottom: 3rem;
  background: url(${require('./../_assets/images/shelf-cat.png')}) left bottom/100% auto no-repeat;
  & svg {
    width: 3rem;
    height: 3rem;
    margin-right: 1.5rem;
  }
`;

export default () => (
  <Left>
    <Item><Icon />По вкусам</Item>
    <Item><Icon />По вкусам</Item>
    <Item><Icon />По вкусам</Item>
    <Item><Icon />По вкусам</Item>
    <Item><Icon />По вкусам</Item>
    <Item><Icon />По вкусам</Item>
  </Left>
);
