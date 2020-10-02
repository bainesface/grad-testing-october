import React from 'react';

export const AppWrapper = ({ PetsList, SubscribeToPets }) => (
  <>
    <div className="container">
      <header>
        <h1>Purrfect Pets</h1>
      </header>
      {PetsList && <PetsList />}
    </div>
    <footer className="footer">{SubscribeToPets && <SubscribeToPets />}</footer>
  </>
);
