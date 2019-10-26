import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import { UserProvider } from './UserContext';

import HomePage from './pages/HomePage';
import Todos from './pages/Todos';
import GithubLogin from './pages/GithubLogin';
import ProtectedRoute from './components/ProtectedRoute';

import logo from './logo.svg';
import './styles/App.scss';

import { ReactComponent as Home } from './../src/assets/navigation/home.svg';
import { ReactComponent as List } from './../src/assets/navigation/list.svg';

const App = () => {
  const setIsAuthenticated = (isAuthenticated, githubData) => {
    setUserState({ ...userState, isAuthenticated: isAuthenticated, githubData: githubData });
  };
  const initialState = {
    githubData: null,
    isAuthenticated: false,
    setIsAuthenticated: setIsAuthenticated
  };
  const [userState, setUserState] = useState(initialState);

  useEffect(() => {
    console.log(userState)
  });

  return (
    <UserProvider value={userState}>
      <Router>
        <div className="app">
          <nav className="app__nav">
            <img src={logo} className="app__logo" alt="logo" />
            <ul>
              <li>
                <Link to="/"><Home />Home</Link>
              </li>
              <li>
                <Link to="/todos"><List />Todos</Link>
              </li>
            </ul>
          </nav>
          <div className="app__content">
            <div className="app__content__heading">
              <h1>React Hooks</h1>
              <p>&copy; 2019 Sebastian Piaścik</p>
            </div>
            <div className="app__content__inner">
              <Switch>
                <ProtectedRoute exact path="/" component={HomePage} isAuthenticated={userState.isAuthenticated} />
                <Route path="/todos" component={Todos} />
                <Route path="/github-login" component={GithubLogin} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;