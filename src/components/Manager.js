import React from "react"
import {Route, Redirect} from "react-router-dom"
import {Login} from "./auth/Login"
import {Register} from "./auth/Register"
import {NavBar} from "./nav/NavBar"
import {ApplicationViews} from "./ApplicationViews"
import "./Manager.css"
import {GameProvider} from "./game/GameProvider"

export const Manager = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("manager_user")) {
          return (
            <>
            <GameProvider>
              <NavBar />
              <ApplicationViews />
            </GameProvider>
            </>
          )
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)