import React from 'react'
import { Link } from 'react-router-dom'
import '../banner.scss'

import arrowRight from '../../../assets/images/arrow-right.svg'
import bannerVector from '../../../assets/images/banner-vector.svg'

const Banner = ({ path, data }) => {
  
  return (
    <div className='banner'>
        <div className="banner__wrap">
          <div className="banner__wrap__left">
          <img className='banner-vector' src={bannerVector} alt="" />
            <div className="banner__wrap__left__content">
              <h1>{data.title ? data.title : data.sectionTitle}</h1>
              <p>{data.description ? data.description : data.sectionDescription}</p>
              <Link to='/apply'>Daha çox <img src={arrowRight} alt="arrow svg icon" /></Link>
            </div>
          </div>
          <div className="banner__wrap__right" style={{backgroundImage: `url('https://api.1stgroupacademy.com/uploads/${path}/${data.image}')`}}>
          </div>
        </div>
    </div>
  )
}

export default Banner
