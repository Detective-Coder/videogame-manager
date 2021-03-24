import React, {useState, createContext} from "react"

// The context is imported and used by individual components that need data
export const GameContext = createContext()

// This component establishes what data can be used
export const GameProvider = (props) => {
  const [games, setGames] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  const apiKey = "e1f9854a79mshacce72468e7cf33p1d5bb1jsna0dba16a5b1f"

  const getGames = () => {
    return fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "e1f9854a79mshacce72468e7cf33p1d5bb1jsna0dba16a5b1f",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
      }
    })
    .then((response) => response.json())
    .then ((results)=> {
      console.log(results)
      setGames(results.results)
    })
    .catch(err => {
      console.error(err);
    });
  }

  const searchGames = (slug) => {
    slug = slug.split(' ').join('-').toLowerCase()
    return fetch(`https://rawg-video-games-database.p.rapidapi.com/games?search=${slug}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "e1f9854a79mshacce72468e7cf33p1d5bb1jsna0dba16a5b1f",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
      }
    })
    .then((response) => response.json())
    .then ((results) => {
      console.log(results)
      setGames(results.results)
    })
    .catch(err => {
      console.error(err)
    })
  }

  const addGame = game => {
    return fetch("http://localhost:8088/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    })
    .then(response => response.json())
  }

  const getGameFromDatabase = () => {
    return fetch("http://localhost:8088/games")
    .then(res => res.json())
    .then(setGames)
  }

  return (
    <GameContext.Provider
      value={{
        games, 
        getGames,
        setGames,
        searchTerms,
        setSearchTerms,
        searchGames,
        addGame,
        getGameFromDatabase
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}