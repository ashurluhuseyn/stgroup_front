import React from 'react'
import { Link } from 'react-router-dom'
import './partner.scss'
import partnerImg from '../../assets/images/partner.png'

const Partner = () => {
  return (
    <div className='partner'>
        <div className="partner__content">
            <div className="partner__content__title">
                <h1>İlk Rəsmi Tərəfdaşımız</h1>
                <p>Bakı Avrasiya Universiteti ilə birgə təhsil və inkişafda daha güclüyük!</p>
            </div>
            <div className="partner__content__img">
                <Link to='https://baau.edu.az/az'>
                    <img src={partnerImg} alt="" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Partner