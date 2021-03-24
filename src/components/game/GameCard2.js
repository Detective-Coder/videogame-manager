import React, { useContext } from "react"
import {GameContext} from "./GameProvider"
import {useHistory} from "react-router-dom"
import "./GameCard.css"
import { GameSearch } from "./GameSearch"



export const GameCard2 = ({game}) => {
  const {addGame} = useContext(GameContext)
  const history = useHistory()

  // const handleClickSaveGame = (event) => {
  //   event.preventDefault()

  //   addGame(game)
  //   .then(() => history.push("/my-games"))
  // }

  return (
    <section className="game">
      <img src={game.background_image} height="150" width="250" />
      <div className="game__text">
        <h2 className="game__name">{game.name}</h2>
        <p className="game__genre">Genre: {game.genre}</p>
        <p className="game__platform">Parent Platform: {game.parentPlatform}</p>
        <button>Playing</button>
        <button>Play Next</button>
        <button>Played</button>
      </div>
    </section>
  )  

}