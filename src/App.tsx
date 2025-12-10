import React, { use, useEffect, useState } from 'react'
import CardTable from './components/CardTable'

export type CardType = {
  question: string,
  answer: string,
  points: number
}

async function getCards() {
  try{
    const res = await fetch(`cards.json`)
    return res.json()
  }catch{
    console.error("Hiba")
    return[]
  }
}

const App = () => {
  const [cards, setCards] = useState<CardType[]>([])
  const [currentCard, setCurrentCard] = useState<CardType>()

  useEffect(() => {
    getCards().then(data => 
    setCards(data)
    )
  }, [])

  useEffect(() => {
    if(cards.length > 0){
      setCurrentCard(cards[0])
    } 
  }, [cards])

  function NextCard(){
    if(!currentCard) return

    if(cards.indexOf(currentCard) + 1 > cards.length) return
    setCurrentCard(cards[cards.indexOf(currentCard) + 1])
  }

  return (
    <main>
      {currentCard && <CardTable card={currentCard} nextCard={NextCard} />}
      {currentCard && <p>{cards.indexOf(currentCard)} / {cards.length}</p>}
      {currentCard &&<progress value={cards.indexOf(currentCard)} max={cards.length}></progress>}
    </main>
  )
}

export default App