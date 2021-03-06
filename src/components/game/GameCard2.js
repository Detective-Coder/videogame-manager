import React, { useContext } from "react"
import {GameContext} from "./GameProvider"
import {useHistory} from "react-router-dom"
import "./GameCard2.css"


export const GameCard2 = ({game}) => {
  const {addGame, updateGame, deleteGame} = useContext(GameContext)
  const history = useHistory()

  const handleSaveGamePlaying = () => {

    updateGame({
      background_image: game.background_image,
      name: game.name,
      genre: game.genre,
      releaseDate: game.releaseDate,
      rating: game.rating,
      parentPlatform: game.parentPlatform,
      statusId: 3,
      id: game.id,
      userId: +localStorage.getItem("manager_user"),
      gameNumber: game.gameNumber
    })
    .then(() => history.push("/"))
  }

  const handleSaveGamePlayNext = () => {

    updateGame({
      background_image: game.background_image,
      name: game.name,
      genre: game.genre,
      releaseDate: game.releaseDate,
      rating: game.rating,
      parentPlatform: game.parentPlatform,
      statusId: 2,
      id: game.id,
      userId: +localStorage.getItem("manager_user"),
      gameNumber: game.gameNumber
    })
    .then(() => history.push("/"))
  }

  const handleSaveGamePlayed = () => {

    updateGame({
      background_image: game.background_image,
      name: game.name,
      genre: game.genre,
      releaseDate: game.releaseDate,
      rating: game.rating,
      parentPlatform: game.parentPlatform,
      statusId: 1,
      id: game.id,
      userId: +localStorage.getItem("manager_user"),
      gameNumber: game.gameNumber
    })
    .then(() => history.push("/"))
  }

  const handleDeleteGame = () => {
    console.log(game.id)
    deleteGame(game.id)
    .then(() => {
      history.push("/my-games")
    })
  }

  return (
    <section className="my-games">
      <img src={game.background_image} height="150" width="250" />
      <div className="game__text">
        <h2 className="game__name">{game.name}</h2>
        <p className="game__genre">Genre: {game.genre}</p>
        <p className="game__platform">Parent Platform: {game.parentPlatform}</p>
        <p className="game__date">Released On: {game.releaseDate}</p>
        <button onClick={(event) => {
          event.preventDefault() //prevent browser from submitting the form and refreshing the page
          handleSaveGamePlaying()
        }}>Playing</button>
        <button onClick={(event) => {
          event.preventDefault()
          handleSaveGamePlayNext()
        }}>Play Next</button>
        <button onClick={(event) => {
          event.preventDefault()
          handleSaveGamePlayed()
        }}>Played</button>
        <button onClick={handleDeleteGame}>Delete</button>
      </div>
    </section>
  )  

}