import React from 'react';

export const errorTracking = (() => {
  // eslint-disable-next-line no-unused-vars
  const sendToService = (err) => {
    // axios.post(SERVICE_URL, err)
    // send the error to the tracking service where the user would be able to sign in and see a dashboard containing errors rendered in a human readable format.
  };

  const track = (e) => sendToService(e.toJSON);

  return {
    track,
  };
})();

const wheelHeadings = {
  n: 'wheel--north',
  s: 'wheel--south',
};

export const Wheel = ({ heading = 'e', children, onClick }) => (
  <button onClick={onClick} className={`wheel ${wheelHeadings[heading]}`}>
    {children}
  </button>
);

export const fetchWhaleWatchingData = (number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([...Array(number)].map(() => Math.ceil(Math.random() * 100)));
    }, 1000);
  });
