import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

import Header from './Header';
import Left from './Left';
import Main from './Main';
import Right from './Right';

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 40rem 1fr 46rem;
  grid-template-rows: 30.4rem 1fr;
`;

const App = () => (
  <Layout>
    <Header />
    <Left />
    <Main />
    <Right />
  </Layout>
);

export default hot(module)(App)
