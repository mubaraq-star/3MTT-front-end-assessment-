import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GitHubRepositories from './GitHubRepositories';
import RepoDetails from './RepoDetails';
import NotFound from './NotFound';

import  './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GitHubRepositories} />
        <Route path="/repo/:id" component={RepoDetails} />
        <Route component={NotFound} /> 
      </Switch>
    </Router>
  );
};

export default App;
