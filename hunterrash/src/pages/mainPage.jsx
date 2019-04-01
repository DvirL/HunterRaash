import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import Sound from '../components/sound';

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

        <Sound 
          title="פאפס"
          description="adfgsf"
          image="asdf.jpg"
          url="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
        />
      </div>
    );
  }
}
