import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/structural/home/Home';
import Error from 'components/dynamic/error/Error';
import 'styles/global/App.scss';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route default component={Error} />
        </Switch>
    </Router>
  );
}

export default App;
