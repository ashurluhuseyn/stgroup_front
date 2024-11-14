import React from 'react'
import arrowUpRight from '../../../assets/images/arrow-up-right.svg'


const AdvantageCard = () => {
  return (
    <div className='advantages__list__item'>
      <div className='advantages-arrow'>
        <img src={arrowUpRight} alt="" />
      </div>
      <div className="advantages__list__item__content">
        <h1>Üstünlüklərimiz</h1>
        <p>Est senectus cras ultrices pulvinar duis velit congue. Ut eros sed velit venenatis volutpat sem commodo elementum  </p>
      </div>
    </div>
  )
}

export default AdvantageCard