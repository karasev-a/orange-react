import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';
import Header from '../header/header';
import { NavCategories } from '../nav';
import Home from '../home/home';
import TripsList from '../tasks/tasks-list';
import UsersList from '../users/users-list';
import NotFound from '../not-found/not-found';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <NavCategories />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trips/" component={TripsList} />
            <Route exact path="/users/" component={UsersList} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
