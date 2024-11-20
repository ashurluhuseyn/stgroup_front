import React from 'react'
import { Link } from 'react-router-dom'
import './career.scss'
import calendar from '../../assets/images/calendar.svg'
import arrowRight from '../../assets/images/arrow-right.svg'
import { getFormattedDate } from '../../utils/date'

const VacancyCard = ({ data }) => {
  return (
    <div className='vacancy-card'>
      <div className="vacancy-card__content">
        <div className="vacancy-card__content__title">
          <h1>{data.title}</h1>
          <p>
            <img src={calendar} alt="" />
            {getFormattedDate(data.deadline).slice(0,10)}
          </p>
          <span>{data.jobType}</span>
        </div>
        <div className="vacancy-card__content__btn">
          <Link to={`/careers/${data.id}`}>
            <span>Müraciət et</span>
            <img src={arrowRight} alt="" />
          </Link>
        </div> 
      </div> 
    </div>
  )
}

export default VacancyCard