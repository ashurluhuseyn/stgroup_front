import React from 'react'
import CorporateBanner from '../../../components/Banner/Corporate'
import Services from '../../../components/Services'
import Advantages from '../../../components/Advantages'
import Partner from '../../../components/Partner'

const Corporate = () => {
  return (
    <div className='corporate'>
      <CorporateBanner />
      <Services />
      <Advantages />
      <Partner />
    </div>
  )
}

export default Corporate