import React from "react"
import {Route} from "react-router-dom"
import {GameSearch} from "./game/GameSearch"
import {GameProvider} from "./game/GameProvider"

export const ApplicationViews = () => (
    <>
      <GameProvider>
        <Route exact path="/">
          <GameSearch />
        </Route>
      </GameProvider>
    </>
)