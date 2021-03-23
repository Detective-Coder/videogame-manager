import React, {useContext, useEffect, useState} from "react"
import {GameContext} from "./GameProvider"
import {GameCard} from "./GameCard"

export const GameList = () => {
  // This state changes when getGames() is invoked
  // const {games, searchGames} = useContext(GameContext)
  // const [searchTerm, setSearchTerm] = useState("")

  // useEffect - reach out to the world for something
  useEffect(() => {
    
  }, [])

  return (
    <>
      {/* <div className="games">
        {console.log(games)}
        {
          games.map(game => {
            return <GameCard key={game.id} game={game} />
          })
        }
      </div> */}
    </>
  )
}