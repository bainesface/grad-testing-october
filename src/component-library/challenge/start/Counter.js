import React, { useState } from 'react';
import { Button } from './Button';
import { Image } from './Image';

const grumpyCat = {
  url: 'https://i.imgur.com/g3LfxdB.jpg',
  alt: 'grumpy cat',
};
const happyCat = {
  url: 'https://i.imgur.com/iA0brpK.jpg',
  alt: 'happy cat',
};

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <>
      <p title="strokes">{counter}</p>
      {counter < 5 ? (
        <>
          <Button onClick={handleClick}>Pet me!</Button>
          <Image alt={grumpyCat.alt} src={grumpyCat.url} />
        </>
      ) : (
        <>
          <Button onClick={handleClick} disabled>
            Pet me!
          </Button>
          <Image alt={happyCat.alt} src={happyCat.url} />
        </>
      )}
    </>
  );
};
