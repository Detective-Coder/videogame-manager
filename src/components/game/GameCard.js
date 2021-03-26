import React, { useContext } from "react"
import {GameContext} from "./GameProvider"
import {useHistory} from "react-router-dom"
import "./GameCard.css"



export const GameCard = ({game}) => {
  const {addGame} = useContext(GameContext)
  const history = useHistory()

  const handleClickSaveGame = (event) => {
    event.preventDefault()
    const newObject = {
      background_image: game.background_image,
      name: game.name,
      genre: game.genres[0]?.name,
      releaseDate: game.released,
      rating: game.rating,
      parentPlatform: game.parent_platforms[0].platform.name,
      statusId: 4
    }
    addGame(newObject)
    .then(() => history.push("/my-games"))
  }

  return (
    <section className="game-list">
      <img src={game.background_image} height="150" width="250" />
      <div className="game__text">
        <h2 className="game__name">{game.name}</h2>
        <button onClick={handleClickSaveGame}>Add to List</button>
      </div>
    </section>
  )  

}