import React from "react"
import {Notification} from "../components";
import {AlertColor} from "@mui/material";

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
}

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{children: JSX.Element}> = ({children}) => {

  const [msg, setMsg] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined)

  const getSuccess = (msg: string) => {
    setOpen(true)
    setMsg(msg)
    setSeverity("success")
  }

  const getError = (msg: string) => {
    setOpen(true)
    setMsg(msg)
    setSeverity("error")
  }

  const handleClose = () => {
    setOpen(false)
  }

  const value = {
    getError,
    getSuccess
  }

  return (
    <NotificationContext.Provider value={value}>
      <Notification msg={msg} handleClose={handleClose} open={open} severity={severity} />
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = React.useContext(NotificationContext)
  
  if(!context){
    throw new Error("No existe el contexto de notificaiones")
  }

  return context
}
