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
      <h2>Alert Component</h2>
      <Alert />
    </div>
  </div>
);

export { Button, Image, Counter };
