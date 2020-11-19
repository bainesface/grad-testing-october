import React from 'react';
import { Image, Alert } from 'component-library';
import axios from 'axios';

// you'll want to setup an axios instance like you have done in SubscribeToPets.

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export class PetsList extends React.Component {
  state = {
    pets: null,
    hasError: false,
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const response = await axiosInstance.get('/pets');
      const {
        data: { pets },
      } = response;
      this.setState({ isLoading: false, pets });
    } catch (err) {
      console.log('in catch?');
      this.setState({ isLoading: false, hasError: true });
      console.log(this.state);
    }
  }

  render() {
    const { pets, hasError, isLoading } = this.state;

    if (isLoading) return <p>Loading loading...</p>;
    else {
      return hasError ? (
        <p>Error</p>
      ) : (
        <ul className="grid">
          {pets.map((pet) => {
            return (
              <li className="grid__item" key={pet.id}>
                <div className="card">
                  <div className="preserve-aspect ar-16-9">
                    <Image src={pet.imageUrl} alt={`${pet.name} the pet`} />
                  </div>
                  <div className="card__content">
                    <h2>{pet.name}</h2>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}
