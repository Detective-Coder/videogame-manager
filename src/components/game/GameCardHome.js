import React from "react"

export const GameCardHome = ({game}) => (
  <section className="game">
    <h3 className="game__name">{game.name}</h3>
  </section>
)