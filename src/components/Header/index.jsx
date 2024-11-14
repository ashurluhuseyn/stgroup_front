import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import arrowDown from '../../assets/images/arrow-down.svg';
import './header.scss';
import { CiPaperplane, CiMenuFries } from "react-icons/ci";
import { useSidebar } from '../../context/sideContext';

const Header = () => {
    const location = useLocation();
    const { toggleSidebar } = useSidebar();
    const headerClass = location.pathname.startsWith('/corporate') ? 'corporate-header' : 'educational-header';

    useEffect(() => {
        if (location.pathname.startsWith('/corporate')) {
            document.body.classList.remove('academic-bg');
            document.body.classList.add('corporate-bg');
        } else {
            document.body.classList.remove('corporate-bg');
            document.body.classList.add('academic-bg');
        }
    }, [location]);

    return (
        <header className={headerClass}>
            {location.pathname.startsWith('/corporate') ? (
                <>
                    <div className="header-top">
                        <ul>
                            <li>
                                <Link to='/'>Təhsil</Link>
                            </li>
                            <li>
                                <Link to='/corporate'>Korporativ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-bottom">
                        <div className="header-logo">
                            <Link to='/'>
                                <img src={logo} alt="1st Group Academy Logo" />
                            </Link>
                        </div>
                        <nav style={{ width: "800px" }} className="header-nav">
                            <ul style={{ justifyContent: "center" }}>
                                <li>
                                    <NavLink to='/corporate/services'>Xidmətlərimiz</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/corporate/events'>Tədbirlərimiz</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-actions">
                            <div className="lang-dropdown">
                                <span>AZ <img src={arrowDown} alt="" /></span>
                            </div>
                            <Link to='/corporate/contact' className='apply-btn'>Müraciət et</Link>
                        </div>
                        <div className="header-menu">
                            <Link to='/corporate/contact'>
                                <CiPaperplane />
                            </Link>
                            <CiMenuFries onClick={toggleSidebar} /> {/* Sidebar'ı toggle etmək üçün düyməni klikləyin */}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="header-top">
                        <ul>
                            <li>
                                <Link to='/'>Təhsil</Link>
                            </li>
                            <li>
                                <Link to='/corporate'>Korporativ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-bottom">
                        <div className="header-logo">
                            <Link to='/'>
                                <img src={logo} alt="1st Group Academy Logo" />
                            </Link>
                        </div>
                        <nav className="header-nav">
                            <ul>
                                <li>
                                    <NavLink to='/about'>Haqqımızda</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/fields'>Tədris sahələri</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/blogs'>Bloq</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/careers'>Karyera</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-actions">
                            <div className="lang-dropdown">
                                <span>AZ <img src={arrowDown} alt="" /></span>
                            </div>
                            <Link to='/apply' className='apply-btn'>Müraciət et</Link>
                        </div>
                        <div className="header-menu">
                            <Link to='/apply'>
                                <CiPaperplane />
                            </Link>
                            <CiMenuFries onClick={toggleSidebar} />
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
