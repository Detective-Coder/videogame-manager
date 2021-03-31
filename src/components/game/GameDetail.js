import React, { useContext, useEffect, useRef, useState } from "react"
import { GameContext } from "./GameProvider"
import { useParams, useHistory } from "react-router-dom"

export const GameDetail = () => {
  const { getGameById, gameDescription, gameDetail } = useContext(GameContext)
  const {pathId} = useParams()
  const [game, setGame] = useState({})
  const gameDetailData = useRef()


  useEffect(() => {
    getGameById(pathId)
    .then((response) => {
      console.log(response)
      gameDetailData.current = response
    })
    .then(() => {
      console.log(gameDetailData.current.gameId)
      gameDescription(gameDetailData.current.gameId)})

  }, [])

  console.log(gameDetail)
  return (
    <section className="game-details">
      <img src={gameDetail.background_image} width="550" />
      <h2 className="game-details__name">{gameDetail.name}</h2>
      <p>{gameDetail.description_raw}</p>
    </section>
  )
}