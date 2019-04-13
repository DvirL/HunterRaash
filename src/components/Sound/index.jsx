import React from 'react';
import PropTypes from 'prop-types';
import './sound.css';

const Sound = ({ image, url }) => {
  new Audio(url); // this is for first time download

  const play = () => {
    const a = new Audio(url);
    a.play();
  };

  return (
    <img className="sound" src={image} onClick={play} alt={image} />
  );
};

Sound.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Sound;
