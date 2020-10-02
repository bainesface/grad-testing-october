import React from 'react';

import { Button } from './Button';
import { Image } from './Image';
import { Counter } from './Counter';
import { Alert } from './Alert';

export const App = () => (
  <div className="container">
    <div className="introduction-component">
      <h2>Button Component</h2>
      <Button onClick={() => alert('Clicked!')}>Click on me!</Button>
    </div>
    <div className="introduction-component">
      <h2>Image Component</h2>
      <Image src="http://placekitten.com/200/200" alt="happy cat" />
    </div>
    <div className="introduction-component">
      <h2>Counter Component</h2>
      <Counter />
    </div>
    <div className="introduction-component">
      <h2>Alert Component with error</h2>
      <Alert variant="error">The request has failed</Alert>
    </div>
    <div className="introduction-component">
      <h2>Alert Component with info</h2>
      <Alert variant="info">
        We deliver the next day for all orders before 5pm
      </Alert>
    </div>
    <div className="introduction-component">
      <h2>Alert Component with a topline and success</h2>
      <Alert variant="success" topLine>
        Your request has succeeded.
      </Alert>
    </div>
  </div>
);

export { Button, Image, Alert, Counter };
