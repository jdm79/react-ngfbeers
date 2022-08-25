import { Route, Switch } from 'react-router-dom';
import React from "react";
import CompaniesPage from './pages/Companies';
import CompanyPage from './pages/Company';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/HomePage';
import MainNavigation from './components/MainNavigation';
import Beers from "./data.json"
import "./App.css";

function App() {
  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/companies'>
        <CompaniesPage />
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
    
  </div>
}

export default App;


