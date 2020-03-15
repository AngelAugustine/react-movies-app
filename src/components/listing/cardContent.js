import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { IMAGE_BASE_URL } from '../../config/api_config'
import "./cardContent.css"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '2rem auto 0 auto',
    display: 'flex',
    maxWidth: '80%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    textAlign:'left',
    padding:'0 2%'
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

  return (
    <Card className={classes.root} variant="outlined">
      <img className="posterImage"
        src={`${IMAGE_BASE_URL}${imgPath}`}
        title="Movie Poster"
      />
      <CardContent className="posterContent">
      <div className="posterContentChild">
        <Typography variant="h5" component="h2">
          {movieName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Release Date: {release} | Popularity: {popularity}
        </Typography>
        
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {overview}
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
