import React from "react"
import {Route} from "react-router-dom"
import {GameSearch} from "./game/GameSearch"
import {GameProvider} from "./game/GameProvider"
import {GameList} from "./game/GameList"

export const ApplicationViews = () => (
    <>
      <GameProvider>
        <Route exact path="/">
          <GameList />
        </Route>
      </GameProvider>
    </>
)