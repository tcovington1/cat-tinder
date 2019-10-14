import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';

const Nomatch = () => (
  <Header as="h3" textAlign="center">
    Page not found return
    <Button color='green'>
    <Link to="/"> Home</Link>
    </Button>
  </Header>
)

export default Nomatch;