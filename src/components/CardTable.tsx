import React from 'react'
import type { CardType } from '../App'

const CardTable = ({card, nextCard}: {card: CardType, nextCard: () => void}) => {

    return (
    <div className='flip-card'>
        <div className='flip-card-inner'>
            <div className={`flip-card-front ${card.points >= 0 ? "green":"red"}`}>
                <h1>{card.question}</h1>
            </div>
            <div className='flip-card-back'>
                <h1 className={`points ${card.points >= 0 ? "green":"red"}`}>{card.points}</h1>
                <h2>{card.answer}</h2>
                <div className='buttons'>
                    <div className='eltalaltam'>
                        <p>Eltaláltam</p>
                        <i onClick={nextCard} className="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='nemsikerult'>
                        <p>Nem sikerült</p>
                        <i onClick={nextCard} className="fa-regular fa-circle-xmark"></i>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CardTable