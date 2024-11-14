import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import './footer.scss'

const Footer = () => {
    const location = useLocation();
    const footerClass = location.pathname.startsWith('/corporate') ? 'corporate-footer' : 'educational-footer'
 
    
  return (
    <footer className={footerClass}>
        <div className="footer-top">
            <div className="footer-logo">
                <Link to='/'>
                    <img src={logo} alt="1st Group Academy Logo" />
                </Link>
            </div>
            <nav className="footer-nav">
                <ul>
                    <li>
                        <Link to='/'>Haqqımızda</Link>
                    </li>
                    <li>
                        <Link to='/'>Tədris sahələri</Link>
                    </li>
                    <li>
                        <Link to='/'>Bloq</Link>
                    </li>
                    <li>
                        <Link to='/'>Tədbirlər</Link>
                    </li>
                </ul>
            </nav>
            <ul className="footer-social">
                <li>
                    <a href="https://www.figma.com/proto/hAhtjb6djHl9ezxyfR9BV6/1ST-ACADEMY-FOR-DEVELOP?node-id=7-8796&node-type=frame&t=I4jMiz007IyRWkug-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
                        <img src={instagram} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.figma.com/proto/hAhtjb6djHl9ezxyfR9BV6/1ST-ACADEMY-FOR-DEVELOP?node-id=7-8796&node-type=frame&t=I4jMiz007IyRWkug-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
                        <img src={linkedin} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.figma.com/proto/hAhtjb6djHl9ezxyfR9BV6/1ST-ACADEMY-FOR-DEVELOP?node-id=7-8796&node-type=frame&t=I4jMiz007IyRWkug-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
                        <img src={whatsapp} alt="" />
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} 1ST Group Academy MMC</p>
        </div>
    </footer>
  )
}

export default Footer