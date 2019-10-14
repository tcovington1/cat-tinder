import React, { Fragment, } from 'react';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
// import Footer from './components/shared/Footer'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components//auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MyCats from './components/shared/MyCats';


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path='/my_cats' component={MyCats} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
    {/* <Footer /> */}
  </Fragment>
)

export default App;
