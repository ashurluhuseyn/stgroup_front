import React from 'react'
import Banner from '../../../components/Banner/Edu'

import icon from '../../../assets/images/about-adv.svg'
import banner2 from '../../../assets/images/about-banner2.png'
import location from '../../../assets/images/location.svg'
import calling from '../../../assets/images/calling.svg'
import mail from '../../../assets/images/mail.svg'
import './about.scss'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import JoinUs from '../../../components/JoinUs'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div className='about-page'>
        <Helmet>
        <title>Haqqımızda</title>
        </Helmet>
        <Banner />
        <div className="about-adv">
            <h1>Biz niyə üstünük?</h1>
            <div className="about-adv__list">
                <div className="about-adv__list__item">
                    <img src={icon} alt="" />
                    <h3>Friendly Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                <div className="about-adv__list__item">
                    <img src={icon} alt="" />
                    <h3>Friendly Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                <div className="about-adv__list__item">
                    <img src={icon} alt="" />
                    <h3>Friendly Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
            </div>
        </div>
        <div className="about-banner2">
            <h1>Preparing Students to Achieve Success</h1>
            <div className="about-banner2__content">
                <div className="about-banner2__content__img">
                    <img src={banner2} alt="" />
                </div>
                <div className="about-banner2__content__description">
                    <h1>Our dream is global learning transformation</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. Pellentesque ultrices a ullamcorper suspendisse hendrerit id scelerisque lacus cras. Sit tristique morbi porttitor aenean vulputate in. Ac tellus massa vulputate consectetur ut eget nunc. Posuere ac vitae leo urna consequat sed dictum diam nullam.
                    Nisl ut scelerisque semper justo in. </p>
                </div>
            </div>
        </div>
        <div className="about-contact-map">
            <h1>Bizimlə əlaqə</h1>
            <div className="contact-map-wrap">
                <div className="map">
                <MapContainer center={[40.4093, 49.8671]} zoom={13} style={{ height: "650px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[40.4093, 49.8671]}>
                        <Popup>Bura 1ST Group Academydir!</Popup>
                    </Marker>
                </MapContainer>
                </div>
                <div className="contact-info">
                    <div className='contact-info__items'>
                        <div className='contact-info__items__elem'>
                            <div className="icon">
                                <img src={location} alt="" />
                            </div>
                            <div className="info">
                                <span>America</span>
                                <span>Santa Ana, Illinois 85486</span>
                                <span>2972 Westheimer Rd.</span>
                            </div>
                        </div>
                    </div>
                    <div className='contact-info__items'>
                        <div className='contact-info__items__elem'>
                            <div className="icon">
                                <img src={calling} alt="" />
                            </div>
                            <div className="info">
                                <span>+994 55 444 22 22</span>
                                <span>+994 77 211 11 14</span>
                                <span>+994 51 666 44 88</span>
                            </div>
                        </div>
                    </div>
                    <div className='contact-info__items'>
                        <div className='contact-info__items__elem'>
                            <div className="icon">
                                <img src={mail} alt="" />
                            </div>
                            <div className="info">
                                <span>1stacademy@gmail.com</span>
                                <span>1stgroup@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <JoinUs />
    </div>
  )
}

export default About