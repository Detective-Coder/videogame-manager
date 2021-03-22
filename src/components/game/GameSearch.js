import React, {useContext, useState} from "react"
import {GameContext} from "./GameProvider"
import "./Game.css"

export const GameSearch = () => {
//   const {setSearchTerms} = useContext(GameContext)
const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
      <label htmlFor="search">Game Search: </label>
      <input 
        type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerm(event.target.value)}
        placeholder="Search for a game..."
      />
      <button>Submit</button>
    </>
  )
}

