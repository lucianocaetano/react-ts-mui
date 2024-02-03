import React from "react";
import {Paper, Container, Grid, Button, Box, Typography, TextField, Stack} from '@mui/material'
import {useNotification} from "../../context/notification.context";
import {LoginValidate} from "../../utils/validateForm";
import { useFormik } from "formik"

type LoginType = {
  username: string,
  password: string
}

const LoginPage: React.FC<{}> = () => {

  const {getSuccess} = useNotification()

  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values))
    }
  })

  return (
    <Container maxWidth="sm">

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: "100vh"}}
      >
        <Grid item>
          <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
            <Typography sx={{mb: 2}} variant="h4">Iniciar Sesión</Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>

              <TextField 
                name="username" 
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username) }
                helperText={formik.touched.username && formik.errors.username}
                fullWidth
                label="email"
                sx={{mt: 2, mb: 1.5}}
              />
             
              <TextField
                name="password"
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password) }
                helperText={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
                fullWidth
                type="password"
                label="password"
                sx={{mt: 1.5, mb: 1.5}}
              />


              <Button fullWidth type="submit" sx={{mt: 1.5, mb: 3}} variant="contained">
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage
