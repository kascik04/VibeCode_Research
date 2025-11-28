import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrivateRoute from './routes/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* Step 1: Define the route for the login page */}
        <Route path="/login" component={LoginForm} />

        {/* Step 2: Define a private route for authenticated users */}
        <PrivateRoute path="/dashboard" component={() => <div>Dashboard</div>} />

        {/* Step 3: Redirect to login if no route matches */}
        <Route path="/" exact>
          <div>Welcome! Please <a href="/login">login</a>.</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;