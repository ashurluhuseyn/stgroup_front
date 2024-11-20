import React from 'react'
import ApplyButton from '../../ApplyButton'
import { ROUTES } from '../../../routes'

const CorporateBanner = ({ data }) => {
  return (
    <div className='cor-banner'>
        <div className="cor-banner__wrap">
            <div className="cor-banner__wrap__content">
                <h1>{data.sectionTitle}</h1>
                <p>{data.sectionDescription}</p>
                <ApplyButton link={ROUTES.CORPORATE.CONTACT.PATH}/>
            </div>
        </div>
    </div>
  )
}

export default CorporateBanner