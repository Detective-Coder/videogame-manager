import React, {useContext, useEffect, useState} from "react"
import {GameContext} from "./GameProvider"
import {GameCard2} from "./GameCard2"
import "./GameList.css"

export const GameList = () => {
  // This state changes when getGames() is invoked
  const {games, getGameFromDatabase} = useContext(GameContext)

  // useEffect - reach out to the world for something
  useEffect(() => {
    getGameFromDatabase()
  }, [])

  return (
    <>
      <div className="games">
        <h1>Main List</h1>
        <div className="games__column">
        {
          games.map(game => {
            if (game.userId === +localStorage.getItem("manager_user")) {
              return <GameCard2 key={game.id} game={game} />
            }
          })
        }
        </div>
      </div> 
    </>
  )
}