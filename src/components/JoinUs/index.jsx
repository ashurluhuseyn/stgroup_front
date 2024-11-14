import React from 'react'
import joinBanner from '../../assets/images/join-banner.png'
import './joinus.scss'
import ApplyButton from '../ApplyButton'
import {ROUTES} from '../../routes'

const JoinUs = () => {
  return (
    <div className='join'>
        <div className="join__wrap">
            <div className="join-form">
                <div className="join-form-content">
                    <h1>Yeni kariyera qurmaq istəyirsən? 
                        Gözləmə, Bizə qoşul!
                        Səndə bir addım öndə ol!</h1>
                    <ApplyButton link={ROUTES.EDUCATIONAL.APPLY.PATH}/>
                </div>
            </div>
            <div className="join-img">
                <img src={joinBanner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default JoinUs