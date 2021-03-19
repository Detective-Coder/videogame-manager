import React, {useContext, useState, useEffect} from "react"
import {GameContext} from "../game/GameProvider"
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = () => {
  const [searchTerms, setSearchTerms] = useState("")
  // const {getGames} = useContext(GameContext)
  const [games, setGames] = useState([])

  useEffect(() => {
    // getGames()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = games.filter(game => game.title.toLowerCase().includes(searchTerms))
      setGames(subset)
    } else {
      // If the search field is blank, display all animals
      setGames(games)
    }
  }, [searchTerms, games])

    return (
      <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-games">My Games</Link>
          </li>
        </ul>
        <label htmlFor="search">Game Search: </label>
        <input 
          type="text"
          className="input--wide"
          onKeyUp={(event) => setSearchTerms(event.target.value)}
          placeholder="Search for a game..."
        />
        <span className="navbar-text">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Logout</Link>
              {/* onClick={localStorage.removeItem("nutshell_user")} */}
            </li>
          </ul>
        </span>
      </nav>
    )
  
}

