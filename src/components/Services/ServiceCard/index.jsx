import React from 'react'
import arrowUpRight from '../../../assets/images/services-icon.svg'
import { Link } from 'react-router-dom'


const ServiceCard = () => {
  return (
    <div className='services__list__item'>
      <div className='services-arrow'>
        <img src={arrowUpRight} alt="" />
      </div>
      <div className="services__list__item__elem">
        <Link to='/corporate/services/1'>İngilis dili</Link>
        <p>Quisque amet natoque ultrices pharetra purus venenatis id enim aliquet. </p>
      </div>
    </div>
  )
}

export default ServiceCard

