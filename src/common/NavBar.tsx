import {Box, AppBar, SwipeableDrawer, Stack, Toolbar, Button, Typography, Grid, Container, Divider, Card, CardHeader, CardMedia, IconButton, CardActions, CardContent} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Cart} from "./Cart";

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState<boolean>(false);

  const handleStateViewDrawer = (state: boolean) => {
    setOpen(state)
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography>Codrr</Typography>
              </Grid>

              <Grid item>
                <Stack direction="row" spacing={2}>
    
                  <Button variant="text" onClick={()=>setOpen(true)}>
                    <ShoppingCartIcon/>
                  </Button>
                  <Button variant="contained" onClick={()=>{
                    navigate("/login")
                  }}>Login</Button>
                  <Button variant="outlined">Register</Button>
                  
                </Stack>

              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Cart open={open} handleStateViewDrawer={handleStateViewDrawer}/>
    </Box>
  )
} 
