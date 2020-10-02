import React from 'react';
import { Router } from '@reach/router';

import { routes } from './routes';
import { Listing } from './Listing';
import { ScrollToTop } from '../_app/ScrollToTop';

const ExampleWrapper = ({ component: Component }) => (
  <div className="example-wrapper">
    <Component />
  </div>
);

export const Routing = () => (
  <Router>
    <ScrollToTop path="/">
      <Listing path="/" routes={routes} />
      {routes.map(({ items, ...route }) =>
        [route, ...items].map(({ component: Component, ...item }) =>
          item.type === 'example' ? (
            <ExampleWrapper
              path={item.path}
              key={item.path}
              component={Component}
            />
          ) : (
            <Component
              key={item.path}
              path={item.path}
              markdownUrl={item.markdownUrl}
            />
          )
        )
      )}
    </ScrollToTop>
  </Router>
);
