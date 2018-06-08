import React from 'react';
import styled from 'styled-components';

const Right = styled.div`
  position: relative;
  background: url(${require('./../_assets/images/right-bg-cropped.png')}) center center/100% 100% no-repeat;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24.3rem;
  height: 5.4rem;
  position: absolute;
  top: 2%;
  left: 11rem;
  color: #ffffff;
  font-family: Montserrat;
  font-size: 1.8rem;
`;

const Image = styled.div`
  width: 55.2%;
  max-height: 74%;
  position: absolute;
  left: 10.2rem;
  bottom: 11.12531969%;
  text-align: center;
  & img {
    max-width: 100%;
    max-height: 50vh;
  }
`;

export default () => (
  <Right>
    <Text>0,7Л Карду 12Л Виски  П/У</Text>
    <Image><img src={require('./../_assets/images/bottles/big-bottle.png')} /></Image>
  </Right>
);
