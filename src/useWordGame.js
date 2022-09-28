import { useState, useEffect, useRef } from "react"

export function useWordGame(startingTime = 10) {
  const [text, setText] = useState("")
  const [countdown, setCountdown] = useState(startingTime)
  const [running, setRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const ref = useRef(null)

  const updateText = (e) => {
    const { value } = e.target
    setText(value)
  }

  const countWords = (text) => {
    const wordsArray = text.trim().split(" ")
    return wordsArray.filter((word) => word !== "").length
  }

  const startGame = () => {
    setRunning(true)
    setWordCount(0)
    setCountdown(startingTime)
    setText("")
    ref.current.disabled = false
    ref.current.focus()
  }

  const endGame = () => {
    setRunning(false)
    ref.current.blur()
    setWordCount(countWords(text))
  }

  useEffect(() => {
    if (running && countdown > 0) {
      setTimeout(() => {
        setCountdown((time) => time - 1)
      }, 1000)
    } else {
      endGame()
    }
  }, [running, countdown])

  return { running, ref, updateText, text, countdown, startGame, wordCount }
}
