import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import './sound.css';

export default class Sound extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.audioRef = React.createRef();
  }

  play = () => {
    this.audioRef.current.play();
  };  

  render() {
    const backgroundImage = {backgroundImage: `url(${this.props.image})`};
  
    return (
      <Card className="sound-container" style={backgroundImage} onClick={this.play}>
        <div>
            <audio src={this.props.url} ref={this.audioRef} />
          </div>
      </Card>
    );
  }
}; 
