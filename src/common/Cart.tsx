import React from "react"
import { SwipeableDrawer, Button, Divider, Box, Typography, CardMedia, Card, CardHeader,  CardContent } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector} from "../redux/hooks";
import {HorizontalCard} from "../components";

interface CartComponentProps {
  open: boolean;
  handleStateViewDrawer: (state: boolean) => void;
}

export const Cart: React.FC<CartComponentProps> = (props) => {
  const items = useAppSelector((state) => state.cartReducer)


  return (

    <SwipeableDrawer
      anchor="right"
      open={props.open}
      onClose={()=>props.handleStateViewDrawer(false)}
      onOpen={()=>props.handleStateViewDrawer(true)}
    >
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems:"center", mx: "20px"}}>

        <Typography variant="h5">Cart</Typography>

        <Button variant="text" size="small" onClick={()=>props.handleStateViewDrawer(false)}>
          <CloseIcon/>
        </Button>
      </Box>

      <Divider/>

      <Box 
        sx={{mx: "30px"}}
      >
        {
          items.length !== 0 ? items.map(item => (
            <HorizontalCard id={item.id} name={item.name} image={item.image}/>
              )): (
            <>no hay datos</>
          )
        }
        {/*
          */}
      </Box>

    </SwipeableDrawer>


  )
}
