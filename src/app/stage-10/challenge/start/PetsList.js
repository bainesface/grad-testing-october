import React from 'react';
import { Image, Alert } from 'component-library';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export class PetsList extends React.Component {
  state = {
    pets: [],
    error: false,
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const pets = await axiosInstance.get('/pets');

      this.setState({
        pets: pets.data,
        loading: false,
      });
    } catch {
      this.setState({
        error: true,
        loading: false,
      });
    }
  }

  render() {
    const { loading, error, pets } = this.state;

    if (loading) {
      return <p className="text-center">Loading pets…</p>;
    }

    if (error) {
      return <Alert variant="error">Unable to fetch pets.</Alert>;
    }

    return (
      <ul className="grid">
        {pets.map(({ name, id, imageUrl }) => (
          <li key={id} className="grid__item">
            <div className="card">
              <div className="preserve-aspect ar-16-9">
                <Image src={imageUrl} alt={`Photograph of ${name}`} />
              </div>
              <div className="card__content">
                <h2>{name}</h2>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
