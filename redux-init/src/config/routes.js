import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import AnotherPage from '../containers/AnotherPage';
import NotFoundPage from '../containers/NotFoundPage';
import EcoPage from '../containers/EcoPage';
import LaLigaPage from '../containers/LaLigaPage';

export default (
  <Switch>
    <Route exact path="/" component={CounterPage} />
    <Route exact path="/eco" component={EcoPage} />
    <Route exact path="/laliga" component={LaLigaPage} />
    <Route exact path="/another" component={AnotherPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
