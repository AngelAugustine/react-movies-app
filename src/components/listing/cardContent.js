import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardContent';
import CardContent from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IMAGE_BASE_URL } from '../../config/api_config'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '2rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({
  imgPath,
  overview,
  movieName,
  release,
  popularity
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <img className="posterImage"
        src={`${IMAGE_BASE_URL}${imgPath}`}
        title="Movie Poster"
      />
      <CardContent className="posterContent">
  
        <Typography variant="h5" component="h2">
          {movieName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Release Date: {release} | Popularity: {popularity}
        </Typography>
        
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
