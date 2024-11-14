import React from 'react'
import '../services.scss'   
import { Link } from 'react-router-dom'
import ServiceCard from '../../../../components/Services/ServiceCard'
import LoadMore from '../../../../components/LoadMore'

const ServiceDetails = () => {
  return (
    <div className='service-details'>
        <ul className="breadcrumb">
                <li>
                    <Link to='/corporate/services'>Xİdmətlərimiz</Link>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li>
                    <Link to='/corporate/services/1'>Ingilis dili</Link>
                </li>
        </ul>
        <div className="service-details__title">
            <h1>Xidmətlərimiz</h1>
            <p>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI.</p>
        </div>
        <div className="service-details__wrap">
            <div className="service-details__wrap__content">
                <h1>İngilis dili</h1>
                <p>Creating a customized SEO strategy based on the audit findings and the client’s goals.Includes a roadmap with timelines and milestones.Creating a customized SEO strategy based on the audit findings and the client’s goals.Includes a roadmap with timelines and milestones.Creating a customized SEO strategy based on the audit findings and the client’s goals.Includes a roadmap with timelines and milestones.Creating a customized SEO strategy based on the audit findings and the client’s goals.Includes a roadmap with timelines and milestones.Creating a customized SEO strategy based on the audit findings and the client’s goals.Includes a roadmap with timelines and milestones.Creating a customized SEO strategy based on the audit findings and the client’s goals.Includes a roadmap with timelines and milestones.Creating a customized SEO strategy based on the audit findings and the client’s goals.Includes a roadmap with timelines and milestones.</p>
            </div>
            <div className="service-details__wrap__img">
                <img src="https://s3-alpha-sig.figma.com/img/2af4/8f7f/493e1d30789dfe35e2d4bcc072d9a8bc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccpCXvQm9HiJX1wZXjxpo8Rh50pIgxmhZglXy1YcqhsckQc-nxkXdF5neOswoaiztYeyRX2pFn8b2DY1ZCHNqfPXOmVZl9HQhcuGg3xTsWRpWRgn7CfJb98MPTCoQlCOfOm7ragHIuZAeOzno-QBjN7Ki2aRVhpnjPDJJzJS7be42LW2ncAGeDj5n8~KGUiCc9CJU5KnnxumQiCg9O17597wFmXzrssgQ4pj4qAeTUsBhBZavFo2an4p1j6N-MORMoS0GEfc1x3hIH5lGNWSMhZtXEPq984nlTxOmmOm7A5XwMROjetCUachzd-f0rYhGnWevMOMzhMepI~xe7iSSQ__" alt="" />
            </div>
        </div>
        <div className="service-details__others">
            <h1>Digər Xidmətlərə Nəzər Yetir</h1>
            <div className="service-details__others__wrap">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
            <LoadMore link='/corporate/services'/>
        </div>
    </div>
  )
}

export default ServiceDetails