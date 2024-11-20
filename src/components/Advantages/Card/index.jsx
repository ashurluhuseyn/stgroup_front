import React from 'react'
import arrowUpRight from '../../../assets/images/arrow-up-right.svg'


const AdvantageCard = ({ data }) => {
  return (
    <div className='advantages__list__item'>
      <div className='advantages-arrow'>
        <img src={arrowUpRight} alt="" />
      </div>
      <div className="advantages__list__item__content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default AdvantageCard