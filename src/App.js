import { Route, Switch } from 'react-router-dom';
import React from "react";
import CompaniesPage from './pages/Companies';
import CompanyPage from './pages/Company';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import NewCompanyPage from './pages/NewCompany';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import Beers from "./data.json"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/companies'>
          <CompaniesPage />
        </Route>
        <Route path='/new-company'>
          <NewCompanyPage />
        </Route>
        <Route path='/company'>
          <CompanyPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;


