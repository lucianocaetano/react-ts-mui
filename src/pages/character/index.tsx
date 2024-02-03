import React from "react";
import {useParams} from "react-router-dom";
import { character } from "../../api/characters";
import { useNotification } from "../../context/notification.context.tsx"
import { ICharacter } from "../../interface/ICharacter.ts";
import {Box, Grid, CircularProgress, Container, Typography, Divider} from "@mui/material";

const CharacterPage: React.FC<{}> = () => {
  const {id} = useParams()
  
  const {getSuccess, getError} = useNotification()
  const [isLoading, setLoading] = React.useState<boolean>(false)
  const [data, setData] = React.useState< ICharacter| null>(null)

  React.useEffect(()=>{
    character.getById({id}).then((res)=>{
      setLoading(true)
      getSuccess("Query exitosa!")
      setData(res.data)
      setLoading(false)
    }).catch(err=>getError(err.message))

  }, [])

  return (
    <Box sx={{width: "100%", mt: "20px"}}>
      <Container>
        <Grid container columnSpacing={2} sx={{mt: 2}}> 
          { 
            isLoading ? (
              <CircularProgress color="secondary" />
            )
            :data&&(
              <>
                <Grid item xs={6}>
                  <Typography variant="h2">{data.name}</Typography>
                  <Divider/>
                  <ul>
                    <li>
                      <Typography>species: {data.species}</Typography>
                    </li>
                    <li>
                      <Typography>status: {data.status}</Typography>
                    </li>

                    <li>
                      <Typography>created: {data.created}</Typography>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <img src={data.image} style={{width: "100%", borderRadius: "0.5em"}}/>
                </Grid>
              </>
            )
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default CharacterPage
