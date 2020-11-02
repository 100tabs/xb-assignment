import React from 'react';
import { Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css'
import routes from './routes'
import { AuthProvider } from './store';
import AppRoutes from './components/AppRoutes'

const App = () => {
  return (
    <AuthProvider>
      <Router >

        <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
          <h1 className="navbar-brand ml-5 font-weight-bolder" > <Link to="/home"> SWAPI</Link></h1>
          <Link to="/login" className="btn ml-auto mr-3 text-light btn-outline-info" >Login</Link>
        </nav>

        <Switch>
          {routes.map(route => (
            <AppRoutes
              key={route.path}
              path={route.path}
              isPrivate={route.isPrivate}
              component={route.component} />
          ))
          }
        </Switch>
      </Router >
    </AuthProvider>
  )
}

export default App;
