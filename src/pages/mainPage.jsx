import React, { Component } from 'react';
import _shuffle from 'lodash/shuffle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import '../App.css';
import Sound from '../components/Sound';

const sounds = [
  {
    image: "images/shney.jpg",
    url: "sounds/ShneyShney.mp3"
  },
  {
    image: "images/TomDvir.jpg",
    url: "sounds/TomDvir.mp3"
  },
  {
    image: "images/Thini.jpg",
    url: "sounds/ThiniBottle.mp3"
  },
  {
    image: "images/Toast.jpg",
    url: "sounds/Toast.mp3"
  },
  {
    image: "images/youngBoiz.jpg",
    url: "sounds/OyLo.mp3"
  },
  {
    image: "images/paps.jpg",
    url: "sounds/ShmipsiPoops.mp3"
  },
  {
    image: "images/Thug.png",
    url: "sounds/MyBrotha.mp3"
  },
  {
    image: "images/airhorn.jpg",
    url: "sounds/AirHorn.mp3"
  },
  {
    image: "images/adi.png",
    url: "sounds/Imale.mp3"
  },
  {
    image: "images/guns.png",
    url: "sounds/guns.mp3"
  }
];

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: true
    };
  }

  handleRandomChange = (event) => {
    this.setState({ random: event.target.checked });
  };

  render() {
    let shuffledSounds = [...sounds];
    if (this.state.random) {
      shuffledSounds = _shuffle(shuffledSounds);
    }

    return (
      <div>
        <AppBar className="App-header" position="static" color="default">
          <Toolbar>
            <Typography className="grow" variant="h6" color="inherit">
              האנטרעש
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.random}
                  onChange={this.handleRandomChange}
                  value="random"
                  color="primary"
                />
              }
              label="Randomize!"
            />
          </Toolbar>
        </AppBar>

        <div className="sounds-container">
          {
            shuffledSounds.map(sound => (
              <Sound
                key={sound.image}
                image={sound.image}
                url={sound.url}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
