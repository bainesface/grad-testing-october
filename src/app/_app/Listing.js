import React from 'react';

import { buildStage } from './Stage';

export const Listing = ({ routes }) => (
  <div className="listing">
    <div className="container">
      <header>
        <h1>Welcome to the TDD Workshop!</h1>
      </header>
    </div>
    <nav>
      <ol className="bare-list">
        {routes
          .filter(({ name }) => name !== 'Not Found')
          .map((route) => buildStage(route))}
      </ol>
    </nav>
  </div>
);
