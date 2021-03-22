import React from "react"

export const GameCard = ({game}) => (
  <section className="game">
    <h2 className="game__name">{game.name}</h2>
  </section>
)