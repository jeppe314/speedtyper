import "./App.css"
import { React, useState, useEffect, useRef } from "react"
import { useWordGame } from "./useWordGame"

function App() {
  const { running, ref, updateText, text, countdown, startGame, wordCount } = useWordGame()

  return (
    <div className="App">
      <h1>SPEED TYPER</h1>
      <textarea
        disabled={!running}
        ref={ref}
        onChange={(e) => updateText(e)}
        value={text}
        spellCheck={false}
      />
      <h4>{`Time remaining: ${countdown}`}</h4>
      <button disabled={running} onClick={() => startGame()}>
        Start game
      </button>
      <h1>{`Word count: ${wordCount}`}</h1>
    </div>
  )
}

export default App
