import React from "react"
import {Route, Redirect} from "react-router-dom"
import {Login} from "./auth/Login"
import {Register} from "./auth/Register"
import NavBar from "./nav/NavBar"
import {App} from "./App"
import "./Manager.css"

export const Manager = () => {
  <>
    <Route
      render={() => {
        if (localStorage.getItem("manager_user")) {
          return (
            <>
              <NavBar />
              <App />
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
}