import React from "react"
import "./GameCard.css"

export const GameCard = ({game}) => (
  <section className="game">
    <img src={game.background_image} height="150" />
    <h3 className="game__name">{game.name}</h3>
  </section>
)