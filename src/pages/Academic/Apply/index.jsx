import React from 'react'
import './apply.scss'
import logo from '../../../assets/images/logo.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';
import joinBanner from '../../../assets/images/join-banner.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const StudentApply = () => {
  return (
    <div className='student-apply'>
        <Helmet>
        <title>Tələbə müraciəti</title>
        </Helmet>
        <div className="logo">
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
        </div>
        <div className="student-apply__wrap">
            <div className="student-apply__wrap__form">
                <div className="apply-form-title">
                    <h1>Tələbə müraciəti</h1>
                    <p>Please provide your company details or contact us via phone
                    or video call.</p>
                </div>
                <form>
                    <div className="apply-form-input input-row">
                        <input type="text" placeholder='Ad'/>
                        <input type="text" placeholder='Soyad'/>
                    </div>
                    <div className="apply-form-input">
                        <select className="w-full border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">İxtisas seç</option>
                            <option value="male">Kişi</option>
                            <option value="female">Qadın</option>
                            <option value="other">Digər</option>
                        </select>
                    </div>
                    <div className="apply-form-input">
                        <input type="email" placeholder='Elektron mail'/>
                    </div>
                    <div className="apply-form-input">
                        <input type="tel" placeholder='Telefon nömrəsi'/>
                    </div>
                    <div className="apply-form-input">
                        <button>Göndər <img src={arrowRight} alt="" /></button>
                    </div>
                </form>
            </div>
            <div className="student-apply__wrap__img">
                <img src={joinBanner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default StudentApply