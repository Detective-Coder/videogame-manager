import React from "react"
import {Route} from "react-router-dom"
import {GameSearch} from "./game/GameSearch"
import {GameProvider} from "./game/GameProvider"
import {GameList} from "./game/GameList"
import { GameListHome } from "./game/GameListHome"
import { GameDetail } from "./game/GameDetail"

export const ApplicationViews = () => (
    <>
      <GameProvider>
        <Route exact path="/">
          <GameListHome />
        </Route>
        <Route exact path="/search">
          <GameSearch />
        </Route>
        <Route exact path="/my-games">
          <GameList />
        </Route>
        <Route exact path="/detail/:pathId(\d+)">
          <GameDetail />
        </Route>
      </GameProvider>
    </>
)