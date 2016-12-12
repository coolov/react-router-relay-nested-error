import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import useRelay from 'react-router-relay';
import { applyRouterMiddleware, Route, Router } from 'react-router';
import browserHistory from 'react-router/lib/browserHistory';

const environment = new Relay.Environment();
environment.injectNetworkLayer(new Relay.DefaultNetworkLayer('/graphql'));

const root = document.getElementById('root');

const Home = Relay.createContainer(({ home }) => (
  <div>{home.hello}</div>
), {
  fragments: {
    home: () => Relay.QL`
      fragment on Home {
        hello
      }
    `,
  },
});

const Shell = Relay.createContainer((props) => (
  <div>
    User: {props.user.name}
    <hr/>
    {props.children}
  </div>
), {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        name
      }
    `,
  },
});

ReactDOM.render(
  <Router
    history={browserHistory}
    // hack to get this example working
    // see https://github.com/relay-tools/react-router-relay/issues/192
    render={applyRouterMiddleware(useRelay.default || useRelay)}
    environment={environment}
  >
    <Route
      path="/"
      component={Shell}
      queries={{user: () => Relay.QL`query { user }`}}
      render={({ error, props, element }) => {
        debugger;
        if (error) {
          return <div>Error!</div>;
        }
        if (props) {
          return React.cloneElement(element, props);
        }
        return <div>Loading</div>

      }}
    >
      <Route
        path="/home"
        component={Home}
        queries={{ home: () => Relay.QL`query { home }` }}
      />
    </Route>
  </Router>,
  root
);
