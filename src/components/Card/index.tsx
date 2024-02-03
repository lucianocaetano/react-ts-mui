import {Button, Card, CardActions, CardContent, CardMedia, Divider, Typography} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useNavigate } from "react-router-dom"
import React from "react"
import {addToCart} from "../../redux/slice/cart.slice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

export type CardProps = {
  image: string,
  name: string,
  id: number
}

export const CardComponent : React.FC<CardProps> = (data) => {
  const [disabled, setDisabled] = React.useState(true)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const item_exist = useAppSelector(state => state.cartReducer)

  React.useEffect(()=>{
    setDisabled(item_exist.some(item => item.id === data.id))
  }, [item_exist, data.id])

  const handleAddToCart = () => {
    dispatch( addToCart(data))
  }

  return (
    <Card sx={{my: 5}}>
      <CardMedia
        component="img"
        height="194"
        image={data.image}
        alt="Paella dish"
      />

      {disabled}
      <CardContent>
        <Typography variant="h4">
          {data.name}
        </Typography>
        <Divider/>
      </CardContent>
      <CardActions
        sx={{display: "flex", justifyContent: "space-between", alignItems:"center"}}
      >
        <Button variant="text" size="small" onClick={()=>navigate(`/character/${data.id}`)}>
          Learn More
        </Button>
        <Button variant="text" size="small" 
          onClick={() => handleAddToCart()}
          disabled={disabled}
        > 
          <AddShoppingCartIcon/>
        </Button>

      </CardActions>  
    </Card> 
  )
}
