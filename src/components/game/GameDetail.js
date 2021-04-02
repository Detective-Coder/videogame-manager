import React, { useContext, useEffect, useRef, useState } from "react"
import { GameContext } from "./GameProvider"
import { useParams } from "react-router-dom"
import "./GameDetail.css"

export const GameDetail = () => {
  const { getGameById, gameDescription, gameDetail } = useContext(GameContext)
  const [game, setGame] = useState({})
  const {gameId} = useParams()

  useEffect(() => {
    getGameById(gameId)
    .then((response) => {
      setGame(response)
      console.log(response)
    })
    // .then(gameDescription(game.gameNumber))
  }, [])

  useEffect(() => {
    gameDescription(game.gameNumber)
  }, [game])

  return (
    <section className="game-details">
      <img className="game-details__image" src={game.background_image} height="400" />
      <h2 className="game-details__name">{game.name}</h2>
      <p>{gameDetail.description_raw}</p>
    </section>
  )
}