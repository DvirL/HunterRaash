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
            title="שניי"
            description="שניי שניי"
            image="images/shney.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound 
            title="תוםדביר"
            description="תוווווווווום דביר"
            image="images/TomDvir.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound 
            title="שניי"
            description="שניי שניי"
            image="images/shney.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound 
            title="תוםדביר"
            description="תוווווווווום דביר"
            image="images/TomDvir.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound 
            title="שניי"
            description="שניי שניי"
            image="images/shney.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound 
            title="תוםדביר"
            description="תוווווווווום דביר"
            image="images/TomDvir.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound 
            title="שניי"
            description="שניי שניי"
            image="images/shney.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
          <Sound 
            title="תוםדביר"
            description="תוווווווווום דביר"
            image="images/TomDvir.jpg"
            url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
          />
        </div>
      </div>
    );
  }
}
