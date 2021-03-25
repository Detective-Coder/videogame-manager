import React, {useContext, useEffect} from "react"
import {GameContext} from "./GameProvider"
import {GameCard2} from "./GameCard2"
import "./GameList.css"

export const GameList = () => {
  // This state changes when getGames() is invoked
  const {games, getGameFromDatabase} = useContext(GameContext)

  // useEffect - reach out to the world for something
  useEffect(() => {
    getGameFromDatabase()
  }, [])

  return (
    <>
      <div className="games">
        <h1>Main List</h1>
        {
          games.map(game => {
            return <GameCard2 key={game.id} game={game} />
          })
        }
      </div> 
    </>
  )
}