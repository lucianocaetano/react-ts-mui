import React from "react"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"

type ThemeProps = {
  children: JSX.Element
}

export enum themePalette {
  BG = "#12181b",
  LIME = "#f5d938",
  FONT_GLOBAL = "'JetBrains Mono', 'monospace'",
  //Alert styles
  ERROR_MAIN = "#44336",
  BG_ERROR_MAIN = "rgba(244, 67, 54, 0, 1)"
}

const theme = createTheme(
  {
    palette: {
      mode: "dark",
      background: {
        default: themePalette.BG
      },primary: {
        main: themePalette.LIME 
      },
     
    },

    typography: {
      fontFamily: themePalette.FONT_GLOBAL
    },
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            textTransform: "none"
          }
        }
      },
      MuiAlert: {
        defaultProps: {
          style: {
            borderRadius: "0.8em",
            fontSize: "1em"
          }
        },
        styleOverrides: {
          standardError: {
            border: "1px solid ${themePalette.ERROR_MAIN}",
            background: themePalette.BG_ERROR_MAIN
          }
        }
      }
    }

  }
) 

export const ThemeConfig: React.FC<ThemeProps> = ({children}) => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}
