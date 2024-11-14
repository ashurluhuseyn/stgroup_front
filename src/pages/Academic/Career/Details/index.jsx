import React from 'react'
import { Link } from 'react-router-dom'
import '../career.scss'

import linkImg from '../../../../assets/images/link.svg'
import arrowRight from '../../../../assets/images/arrow-right.svg'

const CareerDetails = () => {
  return (
    <div className='career-details'>
       <ul className="breadcrumb">
                <li>
                    <Link to='/blogs'>Karyera</Link>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li>
                    <Link to='/blogs/1'>UX/UX Dizayn</Link>
                </li>
        </ul>
        <div className="career-details__content">
          <h2 className=''>Gəl bizə qoşul!</h2>
          <div className="career-details__content__title">
            <h1>UX/UI Dizayner</h1>
            <span>Son müraciət tarixi: <span className='vacancy-deadline'>13 Sentyabr 2024</span></span>
          </div>
          <div className="career-details__content__list">
              <div className='list-elem'>
                <h4>Tələblərimiz</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                </ul>
              </div>
              <div className='list-elem'>
                <h4>Vəzifələriniz</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                </ul>
              </div>
              <div className='list-elem'>
                <h4>Şərtlərimiz</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                  <li>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. </li>
                </ul>
              </div>
              <div className='list-elem'>
                <h4>Müraciət et</h4>
                <form>
                  <div className='input-group'> 
                    <div className='input-group__row'>
                      <input type="text" placeholder='Ad'/>
                      <input type="text" placeholder='Soyad'/>
                    </div>
                    <div className="admin-users__form__container">
                      <label htmlFor="file-upload" className="custom-cv-upload">
                        <img src={linkImg} alt="" /> CV yüklə
                      </label>
                      <input 
                        id="file-upload" 
                        type="file" 
                      />
                    </div>
                    <div className="input-group-btn">
                      <button>
                      Göndər <img src={arrowRight} alt="" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CareerDetails