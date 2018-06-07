import React from 'react';
import styled from 'styled-components';

const Right = styled.div`
  background: url(${require('./../_assets/images/right-bg.png')}) center center/100% calc(100% + 3rem) no-repeat;
  background-position: 0 -3rem;
`;

export default () => (
  <Right></Right>
);
