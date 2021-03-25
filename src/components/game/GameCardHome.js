import React from "react"

export const GameCardHome = ({game}) => (
  <section className="game">
    <img src={game.background_image} height="150" width="250" />
    <h3 className="game__name">{game.name}</h3>
  </section>
)