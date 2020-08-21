import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Footer from './components/Footer';
import Container from './components/Container';
import IndexPage from './components/IndexPage';
import Header from './components/Header';
import ContactPage from './components/ContactPage';
import WorkAtUsPage from './components/WorkAtUsPage';
import ItServicesPage from './components/ItServicesPage';
import ForStartupsPage from './components/ForStartupsPage';
import ForItCompaniesPage from './components/ForItCompaniesPage';
import AboutusPage from './components/AboutusPage';

export const App = hot(module)(() => (
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/itservices" component={ItServicesPage} />
      <Route exact path="/forstartups" component={ForStartupsPage} />
      <Route exact path="/foritcompanies" component={ForItCompaniesPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/aboutus" component={AboutusPage} />
      <Route exact path="/vacancies" component={WorkAtUsPage} />
    </Switch>
    <Footer />
  </Container>
));
