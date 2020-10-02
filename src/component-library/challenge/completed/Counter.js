import React, { Component, Fragment } from 'react';
import { Button } from './Button';
import { Image } from './Image';

const firstImageSrc = 'https://imgur.com/g3LfxdB.jpg';
const firstImageAlt = 'Unhappy cat';

const secondImageSrc = 'https://i.imgur.com/iA0brpK.jpg';
const secondImageAlt = 'Happy cat';

export class Counter extends Component {
  state = {
    numberOfPets: 0,
    buttonDisabled: false,
    imageSrc: firstImageSrc,
    imageAlt: firstImageAlt,
  };

  handleClick = () => {
    this.setState((prevState) => {
      const updatedState = { numberOfPets: prevState.numberOfPets + 1 };

      if (updatedState.numberOfPets === 5) {
        return {
          ...updatedState,
          buttonDisabled: true,
          imageSrc: secondImageSrc,
          imageAlt: secondImageAlt,
        };
      }

      return updatedState;
    });
  };

  render() {
    return (
      <Fragment>
        <Button onClick={this.handleClick} disabled={this.state.buttonDisabled}>
          Click to pet the cat and make him happy
        </Button>
        <Image src={this.state.imageSrc} alt={this.state.imageAlt} />
        <span title="Number of pets" aria-live="assertive">
          {this.state.numberOfPets}
        </span>
      </Fragment>
    );
  }
}
