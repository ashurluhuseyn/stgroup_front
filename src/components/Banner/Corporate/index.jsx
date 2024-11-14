import React from 'react'
import ApplyButton from '../../ApplyButton'
import { ROUTES } from '../../../routes'

const CorporateBanner = () => {
  return (
    <div className='cor-banner'>
        <div className="cor-banner__wrap">
            <div className="cor-banner__wrap__content">
                <h1>Study from home
                with experts</h1>
                <p>Learning with Experts offer arrange of courses across gardening, photography and more delivered online. </p>
                <ApplyButton link={ROUTES.CORPORATE.CONTACT.PATH}/>
            </div>
        </div>
    </div>
  )
}

export default CorporateBanner