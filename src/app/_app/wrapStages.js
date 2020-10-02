import { SubscribeToPets as _01CompletedSubscribe } from '../stage-01/challenge/completed/SubscribeToPets';
import { SubscribeToPets as _01StartSubscribe } from '../stage-01/challenge/start/SubscribeToPets';
import { SubscribeToPets as _02CompletedSubscribe } from '../stage-02/challenge/completed/SubscribeToPets';
import { SubscribeToPets as _02StartSubscribe } from '../stage-02/challenge/start/SubscribeToPets';
import { SubscribeToPets as _03CompletedSubscribe } from '../stage-03/challenge/completed/SubscribeToPets';
import { SubscribeToPets as _03StartSubscribe } from '../stage-03/challenge/start/SubscribeToPets';
import { SubscribeToPets as _04CompletedSubscribe } from '../stage-04/challenge/completed/SubscribeToPets';
import { SubscribeToPets as _04StartSubscribe } from '../stage-04/challenge/start/SubscribeToPets';
import { SubscribeToPets as _05CompletedSubscribe } from '../stage-05/challenge/completed/SubscribeToPets';
import { SubscribeToPets as _05StartSubscribe } from '../stage-05/challenge/start/SubscribeToPets';
import { SubscribeToPets as _07CompletedSubscribe } from '../stage-07/challenge/completed/SubscribeToPets';
import { SubscribeToPets as _07StartSubscribe } from '../stage-07/challenge/start/SubscribeToPets';
import { SubscribeToPets as _08CompletedSubscribe } from '../stage-08/challenge/completed/SubscribeToPets';
import { SubscribeToPets as _08StartSubscribe } from '../stage-08/challenge/start/SubscribeToPets';
import { PetsList as _09CompletedPets } from '../stage-09/challenge/completed/PetsList';
import { SubscribeToPets as _09CompletedSubscribe } from '../stage-09/challenge/completed/SubscribeToPets';
import { PetsList as _09StartPets } from '../stage-09/challenge/start/PetsList';
import { SubscribeToPets as _09StartSubscribe } from '../stage-09/challenge/start/SubscribeToPets';
import { PetsList as _10CompletedPets } from '../stage-10/challenge/completed/PetsList';
import { SubscribeToPets as _10CompletedSubscribe } from '../stage-10/challenge/completed/SubscribeToPets';
import { PetsList as _10StartPets } from '../stage-10/challenge/start/PetsList';
import { SubscribeToPets as _10StartSubscribe } from '../stage-10/challenge/start/SubscribeToPets';
import { PetsList as _11CompletedPets } from '../stage-11/frontend/challenge/completed/PetsList';
import { SubscribeToPets as _11CompletedSubscribe } from '../stage-11/frontend/challenge/completed/SubscribeToPets';
import { PetsList as _11StartPets } from '../stage-11/frontend/challenge/start/PetsList';
import { SubscribeToPets as _11StartSubscribe } from '../stage-11/frontend/challenge/start/SubscribeToPets';
import { AppWrapper } from './AppWrapper';

export const stages = [
  {},
  {
    start: {
      SubscribeToPets: _01StartSubscribe,
    },
    completed: {
      SubscribeToPets: _01CompletedSubscribe,
    },
  },
  {
    start: {
      SubscribeToPets: _02StartSubscribe,
    },
    completed: {
      SubscribeToPets: _02CompletedSubscribe,
    },
  },
  {
    start: {
      SubscribeToPets: _03StartSubscribe,
    },
    completed: {
      SubscribeToPets: _03CompletedSubscribe,
    },
  },
  {
    start: {
      SubscribeToPets: _04StartSubscribe,
    },
    completed: {
      SubscribeToPets: _04CompletedSubscribe,
    },
  },
  {
    start: {
      SubscribeToPets: _05StartSubscribe,
    },
    completed: {
      SubscribeToPets: _05CompletedSubscribe,
    },
  },
  {},
  {
    start: {
      SubscribeToPets: _07StartSubscribe,
    },
    completed: {
      SubscribeToPets: _07CompletedSubscribe,
    },
  },
  {
    start: {
      SubscribeToPets: _08StartSubscribe,
    },
    completed: {
      SubscribeToPets: _08CompletedSubscribe,
    },
  },
  {
    start: {
      SubscribeToPets: _09StartSubscribe,
      PetsList: _09StartPets,
    },
    completed: {
      SubscribeToPets: _09CompletedSubscribe,
      PetsList: _09CompletedPets,
    },
  },
  {
    start: {
      SubscribeToPets: _10StartSubscribe,
      PetsList: _10StartPets,
    },
    completed: {
      SubscribeToPets: _10CompletedSubscribe,
      PetsList: _10CompletedPets,
    },
  },
  {
    start: {
      SubscribeToPets: _11StartSubscribe,
      PetsList: _11StartPets,
    },
    completed: {
      SubscribeToPets: _11CompletedSubscribe,
      PetsList: _11CompletedPets,
    },
  },
].map(({ start, completed }) => ({
  start: () =>
    AppWrapper({
      PetsList: start.PetsList,
      SubscribeToPets: start.SubscribeToPets,
    }),
  completed: () =>
    AppWrapper({
      PetsList: completed.PetsList,
      SubscribeToPets: completed.SubscribeToPets,
    }),
}));
