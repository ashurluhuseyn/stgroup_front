import React from 'react'
import './services.scss'
import ServiceCard from './ServiceCard'
import LoadMore from '../LoadMore'
import { ROUTES } from '../../routes';


const Services = () => {
  return (
    <div className='services'>
        <h1 className='services__title'>Xidmətlərimiz</h1>
        <div className="services__list">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
        <LoadMore link={ROUTES.CORPORATE.SERVICES.PATH}/>
    </div>
  )
}

export default Services