import React from "react"
import "./GameCardHome.css"
import { Link } from "react-router-dom"

export const GameCardHome = ({game}) => {
  console.log(game)
  return <>
    <section className="game">
      <img src={game.background_image} height="150" width="350" />
      <h3 className="game__name">
        <Link to={`/detail/${game.id}`}>
          {game.name}
        </Link>
      </h3>
    </section>
  </>
}