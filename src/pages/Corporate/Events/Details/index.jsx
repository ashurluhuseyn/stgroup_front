import React from 'react'
import EventCard from '../../../../components/Event'
import calendar from '../../../../assets/images/calendar.svg'
import LoadMore from '../../../../components/LoadMore'

const EventDetails = () => {
  return (
    <div className='event-details'>
        <div className="event-content">
            <div className="event-content__banner">
                <h1>The Art of User-Centric Design</h1>
                <p>User-centric design is the key to creating intuitive and engaging digital experiences....</p>
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/1e8c/63ca/c03c82d05d535df17dfc8142ee4b14d6?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Evwr2FskuKO4w~Q1Ql2abf~DQmlTqz~leX4svLohQhJcDsxmnh~Z-pSJAbs6YfTSVAUu0W4jX8dVNXggixDFKZ3rD15~nDV2O2fcNBOK-nUnd01cFMfAoRtQh2m4Q3gTgBzVfZ0emIaQeI3sQpBNPUuBYZSnIJ1kXnc3gYrJNkojhdduW256HlYeIiE8r2-n8JAHCPdRtoaSm8q4cU9F~7ZnuyeGt26ay91vo4Cb5cGanIMRuEA1RQJNpGp6~OP~v90a60NdpLb0hQXwLLRXOdXvc6P~DNJa4JpaWJickzB6ZWMDVIcLgQNEQcmlg7uNuMh-cZpR4xrVV19BrXBDYQ__" alt="" />
                </div>
            </div>
            <ul className="event-content__date">
                <li>English</li>
                <li><img src={calendar} alt="" /> March 2024</li>
            </ul>
            <div className="event-content__description"></div>
        </div>
        <div className="other-events">
            <h1>Digər Tədbirlərə Nəzər Yetir</h1>
            <div className="other-events-list">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <LoadMore link='/corporate/events'/>
        </div>
    </div>
  )
}

export default EventDetails