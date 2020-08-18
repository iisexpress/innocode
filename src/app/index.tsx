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
      <Route path="/itservices" component={ItServicesPage} />
      <Route path="/forstartups" component={ForStartupsPage} />
      <Route path="/foritcompanies" component={ForItCompaniesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/aboutus" component={AboutusPage} />
      <Route path="/vacancies" component={WorkAtUsPage} />
    </Switch>
    <Footer />
  </Container>
));
