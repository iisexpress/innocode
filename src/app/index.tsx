import React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';
import Footer from './components/Footer';
import Container from './components/Container';
import IndexPage from './components/IndexPage';
import Header from './components/Header';
import ContactPage from './components/ContactPage';
import WorkAtUsPage from './components/WorkAtUsPage';

export const App = hot(module)(() => (
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/vacancies" component={WorkAtUsPage} />      
      <Route path="/todo" component={TodoApp} />
    </Switch>
    <Footer />
  </Container>
));
