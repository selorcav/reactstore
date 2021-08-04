import React from 'react'
import { Grid, Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  marginTop: {
    marginTop: '1.5em',
    padding: "20px !important"
  },
  root: {
    width: "100%",
  },
  media: {
    height: 140,
  },
}))

const Item = ({ product }) => {
  const classes = useStyles()
  console.log({ product })
  return (
    <Grid className={classes.marginTop} container item xs={12} sm={6} md={3} >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}
            image={product.pictureUrl}
          />
        </CardActionArea>
        <CardContent>
          <Typography variant="h6" color="secondary">{product.brand}</Typography>
          <Typography variant="h4" color="primary">{product.title}</Typography>
          <Typography variant="body1" gutterBottom>{product.description}</Typography>
          <Typography variant="h4" gutterBottom><Typography variant="body2" color="secondary">Precio:</Typography> ${product.price}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Item
