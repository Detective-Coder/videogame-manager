import React, {useState, createContext} from "react"

// The context is imported and used by individual components that need data
export const GameContext = createContext()

// This component establishes what data can be used
export const GameProvider = (props) => {
  const [games, setGames] = useState([])
  const [gameDetail, setGameDetail] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  const apiKey = "a318cabf23ae485585af5261b95fcc4f"

  const getGames = () => {
    return fetch("https://api.rawg.io/api/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "a318cabf23ae485585af5261b95fcc4f",
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
    return fetch(`https://api.rawg.io/api/games?search=${slug}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "a318cabf23ae485585af5261b95fcc4f",
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

  const gameDescription = (gameId) => {
    return fetch(`https://api.rawg.io/api/games/${gameId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "a318cabf23ae485585af5261b95fcc4f",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
      }
    })
    .then((response) => response.json())
    .then(response => {
      setGameDetail(response)
    })
    .catch(err => {
      console.error(err);
    });
  }

  const addGame = game => {
    return fetch("https://videogame-api.herokuapp.com/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    })
    .then(response => response.json())
  }

  const getGameFromDatabase = () => {
    return fetch("https://videogame-api.herokuapp.com/games")
    .then(res => res.json())
    .then(setGames)
  }

  const getGameById = (gameId) => {
    return fetch(`https://videogame-api.herokuapp.com/games/${gameId}`)
    .then(res => res.json())
   
  }

  const updateGame = (game) => {
    return fetch(`https://videogame-api.herokuapp.com/games/${game.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game)
    })
  }

  const deleteGame = gameId => {
    return fetch(`https://videogame-api.herokuapp.com/games/${gameId}`, {
      method: "DELETE"
    })
    .then(getGameFromDatabase)
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
        getGameFromDatabase,
        updateGame,
        deleteGame,
        getGameById,
        gameDescription,
        gameDetail, 
        setGameDetail
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}