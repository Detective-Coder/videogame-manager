import React from "react"

export const GameCard = ({game}) => (
  <section className="game">
    <h3 className="game__name">{game.name}</h3>
  </section>
)