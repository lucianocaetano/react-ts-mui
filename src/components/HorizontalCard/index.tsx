import React from "react";
import { Card, CardMedia, Grid, CardActions, IconButton, CardContent, Typography } from "@mui/material"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppDispatch } from "../../redux/hooks";
import { removeToCart } from "../../redux/slice/cart.slice";

interface HorizontalCardComponentProps {
  id: string | number;
  image: string;
  name: string;
}

export const HorizontalCard: React.FC<HorizontalCardComponentProps> = (item) => {
  const dispatch = useAppDispatch()
  
  const handleRemoveToCart = () => {
      dispatch(
        removeToCart({
          id: item.id 
        })
      )
  }
  return (

    <Card sx={{ display: 'flex', my: 2, maxWidth: 500}}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.image}
        alt="Rick and Morty"
      />
      <Grid container sx={{ mx: 1 }}>
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h4">{item.name}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <IconButton onClick={handleRemoveToCart}>
              <CloseRoundedIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )

}
