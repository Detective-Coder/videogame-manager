import React, {useContext, useEffect} from "react"
import {GameContext} from "./GameProvider"
import {GameCard2} from "./GameCard2"

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
        {console.log(games)}
        {
          games.map(game => {
            return <GameCard2 key={game.id} game={game} />
          })
        }
      </div> 
    </>
  )
}