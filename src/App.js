import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import routes from "./data/routes";
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import {BACK_END_URL} from './data/url';

function App() {

  const client = new ApolloClient({
    uri: `${BACK_END_URL}/graphql`,
    cache: new InMemoryCache()
  });

  return (

    <ApolloProvider client={client}>
      <Router>
        <Suspense fallback={
          <div id="preloder">
            <div className="loader "></div>
          </div>
        }>
          <div className="">
            <Header />
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component}
                />
              ))}
              <Redirect to="/404" />
            </Switch>
            <Footer />
          </div>
        </Suspense>
      </Router>
    </ApolloProvider>
  );
}

export default App;
