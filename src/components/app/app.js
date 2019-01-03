import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';
import Header from '../header/header';
import { NavCategories } from '../nav';
import Home from '../home/home';
import TripsList from '../tasks/tasks-list';
import UsersList from '../users/users-list';
import LoginPage from '../login/login-page';
import NotFound from '../not-found/not-found';
import Register from '../register/register-page';


class App extends Component {
  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavCategories />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tasks/" component={TripsList} />
            <Route exact path="/users/" component={UsersList} />
            <Route
              exact
              path="/login"
              render={() => (
                <LoginPage onLogin={this.onLogin} />
              )}
            />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
