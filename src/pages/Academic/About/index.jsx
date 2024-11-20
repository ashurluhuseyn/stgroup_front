import React, { useEffect, useState } from 'react'
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
import { getAbout } from '../../../api/about'

const About = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAbout();
        setData(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='about-page'>
        {
            data ? <>
                <Helmet>
                    <title>Haqqımızda</title>
                </Helmet>
                <Banner path='about' data={data.about}/>
                <div className="about-adv">
                    <h1>Biz niyə üstünük?</h1>
                    <div className="about-adv__list">
                       {
                        data.advantages.map(item => {
                            return(
                                <div key={item.id} className="about-adv__list__item">
                                    <img src={icon} alt="" />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                       }
                    </div>
                </div>
                <div className="about-banner2">
                    <h1>Uğura bizimlə birlikdə addım atın</h1>
                    <div className="about-banner2__content">
                        <div className="about-banner2__content__img">
                            <img src={banner2} alt="" />
                        </div>
                        <div className="about-banner2__content__description">
                            <h1>{data.about.innerTitle}</h1>
                            <p>{data.about.innerDescription}</p>
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
                                        <span>{data.about.address}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='contact-info__items'>
                                <div className='contact-info__items__elem'>
                                    <div className="icon">
                                        <img src={calling} alt="" />
                                    </div>
                                    <div className="info">
                                        <span>{data.about.phone1}</span>
                                        <span>{data.about.phone2 && data.about.phone2}</span>
                                        <span>{data.about.phone3 && data.about.phone3}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='contact-info__items'>
                                <div className='contact-info__items__elem'>
                                    <div className="icon">
                                        <img src={mail} alt="" />
                                    </div>
                                    <div className="info">
                                        <span>{data.about.email}</span>
                                        <span>{data.about.email2 && data.about.email2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <JoinUs />
            </> : 'yuklenir...'
        }
    </div>
  )
}

export default About