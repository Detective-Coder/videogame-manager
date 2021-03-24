import React from "react"
import {Route} from "react-router-dom"
import {GameSearch} from "./game/GameSearch"
import {GameProvider} from "./game/GameProvider"
import {GameList} from "./game/GameList"

export const ApplicationViews = () => (
    <>
      <GameProvider>
        <Route exact path="/">
          
        </Route>
        <Route exact path="/search">
          <GameSearch />
        </Route>
        <Route exact path="/my-games">
          <GameList />
        </Route>
      </GameProvider>
    </>
)