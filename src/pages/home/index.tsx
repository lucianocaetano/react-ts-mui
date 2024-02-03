import React from "react";
  import {Container, Button, Box, Grid, Pagination, CircularProgress} from '@mui/material'
import {CardComponent, HeaderComponent} from "../../components/index.ts";
import { character } from "../../api/characters";
import {ICharacter} from "../../interface/ICharacter.ts";

export const HomePage: React.FC<{}> = () => {
  const [data, setData] = React.useState<Array<ICharacter> | null>(null);
  const [page, setPage] = React.useState<number>(1)
  const [count, setCount] = React.useState<number>(0);
  const [isLoading, setLoading] = React.useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent, value: number) => {
    setPage(value)
  }

  React.useEffect(()=>{
    setLoading(true)
    character.getAll({page}).then(res=>{
      setData(res.data.results)
      setCount(res.data.info.pages)
      setTimeout(()=>setLoading(false), 1000)
    }).catch(err=>{
      console.error(err)
    })
  }, [page])

  return (
    <Container sx={{"mt": 2}} maxWidth="xl">
      <HeaderComponent 
        title="Hola Mundo" 
        description="get started" 
        element={
          <Button variant="contained" fullWidth>Click Here!</Button>
        }
      />

      <Grid 
        container 
        spacing={2} 
        direction="row"
        justifyContent="center"
        alignItems="top"
      >
        {
          isLoading? (
            <CircularProgress color="secondary" />
          ):(
            <>
              {
                (data) ? data.map((element) =>(
                  <Grid key={element.id} item md={4} xs={8} sm={6}>
                    <CardComponent id={element.id} image={element.image} name={element.name}/>
                  </Grid>
                )):(
                  <>no hay nada o problemas de conexion :(</>
                )
              }
            </>
          )
        }
      </Grid>
      {
        !isLoading && (
          <Box sx={{my: "30px", width:"100%", display:"flex", justifyContent:"center"}}>

            <Pagination count={count} page={page} onChange={handleChange} />
          </Box>
        )
      }
    </Container>
  )
}
