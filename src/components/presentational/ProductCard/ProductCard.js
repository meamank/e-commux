import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProductCard = (props) => {
const { name, price,rating } = props;
const classes = useStyles();
return (
<div className={classes.root}>
        <Card className={classes.card}>
           <Grid container spacing={2}>
             <Grid item>
                <CardContent>
                    <CardMedia className={classes.image}
                        image="https://res.cloudinary.com/meamank/image/upload/v1571096222/tall-heath_lpqbkb.png"
                        title="Contemplative Reptile"/>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5" >
                    {name}
                  </Typography>
                  </Grid>
                  <Grid item xs>
                  <Typography variant="body2" color="textSecondary" >
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                  </Grid>
                  <Grid item xs>
                  <Typography variant="body2" color="h4">
                    Rating: {rating}
                  </Typography>
                  </Grid>
                  <Grid item xs>
                  <Typography variant="body2" color="h4">
                    Price: Rs.90
                  </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Card>
      </div>
    );
}
export default ProductCard;