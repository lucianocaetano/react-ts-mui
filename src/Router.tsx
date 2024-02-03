import React from "react"
import { HomePage } from "./pages"
import { LoginPage } from "./pages"
import { Routes, Route } from "react-router-dom"
import {RouterLayout} from "./common/RouterLayout.tsx"
import { CharacterPage } from "./pages"

export const AppRouter: React.FC<{}> = () => {

  return (
    <Routes>
      <Route path="*" element={
        <h1>404 - not found</h1>
      }/>
      <Route path="/" element={<RouterLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/character/:id" element={<CharacterPage/>}/>
      </Route>  
      <Route path="/login" element={<LoginPage/>}/>  
    </Routes>
  )
}
