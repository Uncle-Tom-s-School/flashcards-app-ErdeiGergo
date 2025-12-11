import React, { useState } from 'react'
import type { CardType } from '../App'

const CardTable = ({card, nextCard}: {card: CardType, nextCard: () => void}) => {

    const [turned, setTurned] = useState<Boolean>(false)

    function turn() {
        setTurned(!turned)
    }

    return (
    <div className={`flip-card ${turned ? "turned":""}`} onClick={turn}>
        <div className='flip-card-inner'>
            <div className={`flip-card-front ${card.points >= 0 ? "green":"red"}`}>
                <h1>{card.question}</h1>
            </div>
            <div className='flip-card-back'>
                <h1 className={`points ${card.points >= 0 ? "green":"red"}`}>{card.points}</h1>
                <h2>{card.answer}</h2>
                <div className='buttons'>
                    <div className='eltalaltam' onClick={nextCard}>
                        <p>Eltaláltam</p>
                        <i className="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='nemsikerult' onClick={nextCard}>
                        <p>Nem sikerült</p>
                        <i className="fa-regular fa-circle-xmark"></i>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CardTable