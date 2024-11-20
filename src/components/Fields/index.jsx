import React from 'react'
import './field-card.scss'
import arrowRight from '../../assets/images/arrow-right.svg'
import { Link } from 'react-router-dom'

const FieldCard = ({ data }) => {
  return (
    <div className='field-card'>
        <div className="field-card__content">
            <div className="field-card__content__title">
                <h1>{data.title}</h1>
                <p>{data.description.length > 40 ? data.description.slice(0,40) + "..." : data.description}</p>
                <div>
                    <Link to={`/fields/${data.id}`}>
                        <img src={arrowRight} alt="" />
                    </Link>
                </div>
            </div>
            <div className="field-card__content__img">
                <img src={`http://localhost:5000/uploads/courses/${data.icon}`} alt={data.title + "icon"} />
            </div>
        </div>
    </div>
  )
}

export default FieldCard