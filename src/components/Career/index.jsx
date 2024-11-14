import React from 'react'
import { Link } from 'react-router-dom'
import './career.scss'
import calendar from '../../assets/images/calendar.svg'
import arrowRight from '../../assets/images/arrow-right.svg'

const VacancyCard = () => {
  return (
    <div className='vacancy-card'>
      <div className="vacancy-card__content">
        <div className="vacancy-card__content__title">
          <h1>UX/UI Dizayner</h1>
          <p>
            <img src={calendar} alt="" />
            13 Sentyabr 2024
          </p>
          <span>Full-time</span>
        </div>
        <div className="vacancy-card__content__btn">
          <Link to='/careers/1'>
            <span>Müraciət et</span>
            <img src={arrowRight} alt="" />
          </Link>
        </div> 
      </div> 
    </div>
  )
}

export default VacancyCard