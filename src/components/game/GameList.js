import React, {useContext, useEffect, useState} from "react"
import {GameContext} from "./GameProvider"
import {GameCard} from "./GameCard"

export const GameList = () => {
  // This state changes when getGames() is invoked
  const {games, searchGames} = useContext(GameContext)
  const [searchTerm, setSearchTerm] = useState("")

  // useEffect - reach out to the world for something
  useEffect(() => {
    
  }, [])

  const handleControlledInputChange = (event) => {
    const newTerm = {...searchTerm}
    newTerm[event.target.name] = event.target.value
    setSearchTerm(newTerm)
  }

  return (
    <>
      <label htmlFor="search">Game Search: </label>
        <input 
          type="text"
          className="input--wide"
          placeholder="Search for a game..."
          name="search"
          onChange={handleControlledInputChange}
        />
        <button onClick={() => {searchGames(searchTerm.search)}}>Submit</button>
      <div className="games">
        {console.log(games)}
        {
          games.map(game => {
            return <GameCard key={game.id} game={game} />
          })
        }
      </div>
    </>
  )
}