import React from 'react';
import { Header } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Home = () => (
    <>
  <AuthConsumer>
  { auth =>
    <Header as='h1' textAlign='center'>Admin</Header>

  }
  </AuthConsumer>
  </>
)

export default Home;