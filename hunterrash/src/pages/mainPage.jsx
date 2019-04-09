import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
  }
];

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              האנטרעש
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="sounds-container">
          {
            sounds.map(sound => (
              <Sound
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
