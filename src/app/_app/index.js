import React from 'react';

import { Routing } from './Routing';
import { Breadcrumbs } from './Breadcrumbs';
import { Footer } from './Footer';

export const App = () => (
  <>
    <Breadcrumbs />
    <div className="main">
      <Routing />
    </div>
    <Footer />
  </>
);
