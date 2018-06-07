import React from 'react';
import styled from 'styled-components';

const Right = styled.div`
  background: url(${require('./../_assets/images/right-bg.jpg')}) center center/100% calc(100% + 2rem) no-repeat;
  background-position: 0 -2rem;
`;

export default () => (
  <Right></Right>
);
