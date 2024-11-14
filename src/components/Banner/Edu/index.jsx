import React from 'react'
import { Link } from 'react-router-dom'
import '../banner.scss'

import arrowRight from '../../../assets/images/arrow-right.svg'
import bannerVector from '../../../assets/images/banner-vector.svg'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner__wrap">
          <div className="banner__wrap__left">
          <img className='banner-vector' src={bannerVector} alt="" />
            <div className="banner__wrap__left__content">
              <h1>Study from home with experts</h1>
              <p>Learning with Experts offer arrange of
                courses across gardening, photography
                and more delivered online.</p>
              <Link to='/apply'>Daha çox <img src={arrowRight} alt="arrow svg icon" /></Link>
            </div>
          </div>
          <div className="banner__wrap__right">
          </div>
        </div>
    </div>
  )
}

export default Banner