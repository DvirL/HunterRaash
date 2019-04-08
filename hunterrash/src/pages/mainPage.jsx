import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import Sound from '../components/Sound';

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
          <Sound
            image="images/shney.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound
            image="images/TomDvir.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound
            image="images/Thini.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound
            image="images/Toast.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound
            image="images/youngBoiz.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound
            image="images/paps.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound
            image="images/Thug.png"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound
            image="images/airhorn.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
        </div>
      </div>
    );
  }
}
