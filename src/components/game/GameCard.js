import React, { useContext } from "react"
import {GameContext} from "./GameProvider"
import {useHistory} from "react-router-dom"
import "./GameCard.css"



export const GameCard = ({game}) => {
  const {addGame} = useContext(GameContext)
  const history = useHistory()

  const handleClickSaveGame = (event) => {
    event.preventDefault()

    addGame(game)
    .then(() => history.pushState("/my-games"))
  }

  return (
    <section className="game">
      <img src={game.background_image} height="150" width="250" />
      <div className="game__text">
        <h2 className="game__name">{game.name}</h2>
        <button onClick={handleClickSaveGame}>Add to List</button>
      </div>
    </section>
  )  

}