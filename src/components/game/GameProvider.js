import React, {useState, createContext} from "react"

// The context is imported and used by individual components that need data
export const GameContext = createContext()

// This component establishes what data can be used
export const GameProvider = (props) => {
  const [games, setGames] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  const apiKey = "e1f9854a79mshacce72468e7cf33p1d5bb1jsna0dba16a5b1f"

  const getGames = () => {
    return fetch("http://rawg-video-games-database.p.rapidapi.com/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
      }
    })
    .then((response) => response.json())
    .then((x)=> {
      console.log(x)
    })
  }

  return (
    <GameContext.Provider
      value={{
        games, 
        getGames,
        searchTerms,
        setSearchTerms
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}