import React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';
import Footer from './components/Footer';
import Container from './components/Container';
import IndexPage from './components/IndexPage';
import Header from './components/Header';

export const App = hot(module)(() => (
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/second" component={IndexPage} />
      <Route path="/todo" component={TodoApp} />
    </Switch>
    <Footer />
  </Container>
));
