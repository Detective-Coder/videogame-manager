import React, {useContext, useState, useEffect} from "react"
import {GameContext} from "../game/GameProvider"
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import logo from "../images/gaming-logo.jpg"

export const NavBar = () => {
  const [searchTerms, setSearchTerms] = useState("")
  const {getGames} = useContext(GameContext)
  const [games, setGames] = useState([])

  useEffect(() => {
    getGames()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching games
      const subset = games.filter(game => game.title.toLowerCase().includes(searchTerms))
      setGames(subset)
    } else {
      // If the search field is blank, display all games
      setGames(games)
    }
  }, [searchTerms, games])

    return (
      <nav className="navbar flex-md-nowrap p-0 shadow">
        <img src={logo} alt="logo" />
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-games">My Games</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
        </ul>
        <span className="navbar-text">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={() => {
                localStorage.removeItem("manager_user")}}>Logout</Link>
              
            </li>
          </ul>
        </span>
      </nav>
    )
  
}

