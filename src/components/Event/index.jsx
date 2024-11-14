import React from 'react'
import { Link } from 'react-router-dom'
import './event.scss'
import calendar from '../../assets/images/calendar.svg'

const EventCard = () => {
  return (
    <div className='events__list__item'>
        <Link to='/corporate/events/1'>
            <div className="events__list__item__image">
                <img src="https://s3-alpha-sig.figma.com/img/2af4/8f7f/493e1d30789dfe35e2d4bcc072d9a8bc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXB7fHBBKvjPOL9hGQ3Ln8l4E2PUrApHiTehkMtK3pzfGgolkeqrzBdyX3vQrcfeUK5LsqYqs~jzCiaCMrTJx~LDW2UfxpID4EOYgizhx1bDCMLBgl~IMpn12iWYfFY0~8Z~QRWiZWAnVfrWGO5nu0zWU5e7cmGoZ-FVdcnRObBbcqsFG~ds1YxYnnSMFAP2MDiQQX7oxmdr4g7QtkFSEk7TA5TEbs3o6k-3MJ1ahrm2AE1GFJa2IbQiMOpd9Wch50I0oqswh8ijBO6nwtCWsA9eNUxe4qAie4mTqNPIHBnTJ-nk3D1QaUGmNvcRKc7-AKzkx8cb4lx~FsMFYZwOkw__" alt="" />
            </div>
            <div className="events__list__item__content">
                <h1>The Art of User-Centric Design</h1>
                <p>User-centric design is the key to creating intuitive and engaging digital experiences....</p>
                <ul>
                    <li>English</li>
                    <li><img src={calendar} alt="" /> March 2024</li>
                </ul>
            </div>
        </Link>
    </div>
  )
}

export default EventCard