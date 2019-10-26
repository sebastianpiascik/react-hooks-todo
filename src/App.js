import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { UserProvider } from './UserContext';

import HomePage from './pages/HomePage';
import Todos from './pages/Todos';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

import logo from './logo.svg';
import './styles/App.scss';

import { ReactComponent as Home } from './../src/assets/navigation/home.svg';
import { ReactComponent as List } from './../src/assets/navigation/list.svg';

const App = () => {
  const setGithubData = username => {
    setUserState({ ...userState, username: username });
  };
  const setIsAuthenticated = isAuthenticated => {
    setUserState({ ...userState, isAuthenticated: isAuthenticated });
  };
  const initialState = {
    githubData: {},
    setGithubData: setGithubData,
    isAuthenticated: false,
    setIsAuthenticated: setIsAuthenticated
  };
  const [userState, setUserState] = useState(initialState);

  return (
    <UserProvider value={userState}>
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
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;