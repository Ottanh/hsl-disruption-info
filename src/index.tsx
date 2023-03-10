import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  ApolloClient,
  ApolloProvider,  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import { StateProvider, reducer } from './state';
import { MapProvider } from 'react-map-gl';
import { setDarkTheme } from './utils/theme';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

setDarkTheme();

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StateProvider reducer={reducer}>
        <MapProvider>
          <App />
        </MapProvider>
      </StateProvider>
    </ApolloProvider>
  </React.StrictMode>
);

