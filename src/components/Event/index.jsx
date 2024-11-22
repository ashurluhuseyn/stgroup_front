import React from 'react'
import { Link } from 'react-router-dom'
import './event.scss'
import calendar from '../../assets/images/calendar.svg'
import { getFormattedDate } from '../../utils/date'

const EventCard = ({ data }) => {
  return (
    <div className='events__list__item'>
        <Link to={`/corporate/events/${data.id}`}>
            <div className="events__list__item__image">
                <img src={`https://1stgroupacademy.com/uploads/events/${data.image}`}  alt="" />
            </div>
            <div className="events__list__item__content">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <ul>
                    <li>{data.category.title}</li>
                    <li><img src={calendar} alt="" />{getFormattedDate(data.createDate).slice(0,10)}</li>
                </ul>
            </div>
        </Link>
    </div>
  )
}

export default EventCard
