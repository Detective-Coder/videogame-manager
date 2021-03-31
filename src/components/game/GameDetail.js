import React, { useContext, useEffect, useRef, useState } from "react"
import { GameContext } from "./GameProvider"
import { useParams } from "react-router-dom"
import "./GameDetail.css"

export const GameDetail = () => {
  const { getGameById, gameDescription, gameDetail } = useContext(GameContext)
  const {gameNumber} = useParams()
  const [game, setGame] = useState({})
  const gameDetailData = useRef()


  useEffect(() => {
    getGameById(gameDetail.id)
    .then((response) => {
      console.log(response)
      gameDetailData.current = response
    })
    .then(() => {
      console.log(gameDetailData.current.gameNumber)
      gameDescription(gameDetailData.current.gameNumber)})

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