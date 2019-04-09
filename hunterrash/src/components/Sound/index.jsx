import React from 'react';
import PropTypes from 'prop-types';
import './sound.css';

export default class Sound extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
  
  play = () => {
    const a = new Audio(this.props.url);
    a.play();
  };

  render() {
    return (
      <img className="sound" src={this.props.image} onClick={this.play} alt={this.props.image}/>
    );
  }
}; 
