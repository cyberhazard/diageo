import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  grid-column: span 3;
  height: 100%;
  background: url(${require('./../_assets/images/big-shelf.png')}) left bottom/100% auto no-repeat, url(${require('./../_assets/images/top-bg.png')}) center center/cover;
`;

export default () => (
  <Header></Header>
);
