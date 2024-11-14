import React from 'react'
import {Link} from 'react-router-dom'
import './load.scss'

import arrowRight from '../../assets/images/arrow-right.svg'

const LoadMore = ({ link }) => {
  return (
    <div className='load-more'>
        <Link to={link}>Daha çox <img src={arrowRight} alt="" /></Link>
    </div>
  )
}

export default LoadMore