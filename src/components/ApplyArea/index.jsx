import React from 'react'
import './apply.scss'
import arrowRight from '../../assets/images/arrow-right.svg'

const ApplyArea = () => {
  return (
    <div className='apply-area'>
        <div className="apply-area__title">
            <h1>Tərəfdaş müraciəti</h1>
            <p>Please provide your company details or contact us via phone or video call.</p>
        </div>
        <div className="apply-area__form">
            <form>
                <h1>Müraciət et</h1>
                <div className="input-container-area">
                    <div className="input-container">
                        <input type="text" placeholder='Ad'/>
                        <input type="text" placeholder='Soyad'/>
                        <input type="email" placeholder='E-mail'/>
                    </div>
                    <div className="input-container">
                        <input type="tel" placeholder='Telefon nömrəsi'/>
                        <input type="text" placeholder='Qeyd' className='textarea'/>
                    </div>
                </div>
                <div className="input-submit-container">
                        <button>Göndər <img src={arrowRight} alt="" /></button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default ApplyArea