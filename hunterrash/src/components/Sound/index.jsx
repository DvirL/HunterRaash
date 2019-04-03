import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: '15px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  content: {
    flex: '1 0 auto',
    textAlign: 'right'
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

const Sound = (props) => {
  const { classes } = props;
  const backgroundImage = {backgroundImage: `url(${props.image})`};

  return (
    <Card className={classes.card}>
      <div className={classes.details} style={backgroundImage}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <audio src={props.url} controls />
        </div>
      </div>
    </Card>
  );
}

Sound.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sound);