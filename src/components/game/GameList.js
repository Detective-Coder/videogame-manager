import React, {useContext, useEffect} from "react"
import {GameContext} from "./GameProvider"
import {GameCard} from "./GameCard"

export const GameList = () => {
  // This state changes when getGames() is invoked
  const {games, getGames} = useContext(GameContext)

  // useEffect - reach out to the world for something
  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className="games">
      {console.log(games)}
      {
        games.map(game => {
          console.log(games)
          return <GameCard key={game.id} game={game} />
        })
      }
    </div>
  )
}