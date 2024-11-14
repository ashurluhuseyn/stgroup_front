import React from 'react'

import './advantage.scss'
import AdvantageCard from './Card'

const Advantages = () => {
  return (
    <div className='advantages'>
        <h1 className='advantages__title'>Üstünlüklərimiz</h1>
        <div className="advantages__list">
            <AdvantageCard />
            <AdvantageCard />
            <AdvantageCard />
        </div>
    </div>
  )
}

export default Advantages