import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";
import { UserProvider } from './UserContext';

import Home from './pages/Home';
import Github from './pages/Github';
import Todos from './pages/Todos';
import GithubLogin from './components/github/Login';
import ProtectedRoute from './components/ProtectedRoute';

import logo from './logo.svg';
import './styles/App.scss';

import { ReactComponent as HomeIcon } from './../src/assets/navigation/home.svg';
import { ReactComponent as ListIcon } from './../src/assets/navigation/list.svg';

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
    console.log(userState);
  });

  return (
    <UserProvider value={userState}>
      <Router>
        <div className="app">
          <nav className="app__nav">
            <img src={logo} className="app__logo" alt="logo" />
            <ul>
              <li>
                <NavLink to={`${process.env.PUBLIC_URL}/github`}><HomeIcon />Github</NavLink>
              </li>
              <li>
                <NavLink to={`${process.env.PUBLIC_URL}/todos`}><ListIcon />Todos</NavLink>
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
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                <ProtectedRoute path={`${process.env.PUBLIC_URL}/github`} component={Github} isAuthenticated={userState.isAuthenticated} />
                <Route path={`${process.env.PUBLIC_URL}/todos`} component={Todos} />
                <Route path={`${process.env.PUBLIC_URL}/github-login`} component={GithubLogin} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;