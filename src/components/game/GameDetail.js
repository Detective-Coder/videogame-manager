import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider"
import { useParams, useHistory } from "react-router-dom"

export const GameDetail = () => {
  const { getGameById } = useContext(GameContext)
  const {gameId} = useParams()
  const [game, setGame] = useState({})

  useEffect(() => {
    getGameById(gameId)
    .then((response) => {
      console.log(response)
      setGame(response)
    })
  }, [])

  return (
    <section className="game-details">
      <h2 className="game-details__name">{game.name}</h2>
    </section>
  )
}