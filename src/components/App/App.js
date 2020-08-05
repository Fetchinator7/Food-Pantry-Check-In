import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import TestHome from '../TestHome';
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            {/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:3000/home will show the home page if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Create Account' page.
              Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            {/* <ProtectedRoute exact path="/home" component={PlacesSearch} /> */}
            <ProtectedRoute exact path="/home" component={TestHome} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            {/* This works the same as the other protected route, except that if the user is logged in,
              they will see their profile page instead. */}
            {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default connect()(App);
