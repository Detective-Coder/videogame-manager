import React, {useContext, useEffect} from "react"
import {GameContext} from "./GameProvider"
import {GameCardHome} from "./GameCardHome"
import "./GameListHome.css"

export const GameListHome = () => {
  // This state changes when something happens
  const {games, getGameFromDatabase}  = useContext(GameContext)

  // useEffect - reach out for something
  useEffect(() => {
    getGameFromDatabase()
  }, [])

  return (
    <>
      <section className="games-container">
        <h1>Your Games</h1>
        <section className="games-columns">
          <div className="games-playing">
            <h2 className="games-playing__heading">Currently Playing</h2>
            {
              games.map(game => {
                if (game.statusId === 3) {
                  return <GameCardHome key={game.id} game={game} />
                }
              })
            }
          </div>
          <div className="games-next">
            <h2 className="games-next__heading">Next to Play</h2>
            {
              games.map(game => {
                if (game.statusId === 2) {
                  return <GameCardHome key={game.id} game={game} />
                }
              })
            }
          </div>
          <div className="games-played">
            <h2 className="games-played__heading">Games You've Played</h2>
            {
              games.map(game => {
                if (game.statusId === 1) {
                  return <GameCardHome key={game.id} game={game} />
                }
              })
            }
          </div>
        </section>
      </section>
    </>
  )
}