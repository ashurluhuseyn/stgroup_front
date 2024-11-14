import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSidebar } from '../../context/sideContext';
import './sidenav.scss';
import arrowRight from '../../assets/images/arrow-right.svg';
import { ROUTES } from '../../routes';

const Sidenav = () => {
  const { visibleRight, setVisibleRight } = useSidebar();
  const location = useLocation();

  const handleLinkClick = () => {
    setVisibleRight(false); 
  };

  return (
    <>
      {visibleRight && (
        <div className="sidenav">
          <div className="sidenav__header">
            <NavLink to='/' onClick={handleLinkClick}>Təhsil</NavLink>
            <NavLink to='/corporate' onClick={handleLinkClick}>Korporativ</NavLink>
          </div>
          {
            location.pathname.startsWith('/corporate') ? <ul className="sidenav__links">
            <li>
              <Link to={ROUTES.CORPORATE.SERVICES.MAIN.PATH} onClick={handleLinkClick}>Xidmətlərimiz</Link>
              <img src={arrowRight} alt="" />
            </li>
            <li>
              <Link to={ROUTES.CORPORATE.EVENTS.MAIN.PATH} onClick={handleLinkClick}>Tədbirlərimiz</Link>
              <img src={arrowRight} alt="" />
            </li>
          </ul> : <ul className="sidenav__links">
            <li>
              <Link to='/about' onClick={handleLinkClick}>Haqqımızda</Link>
              <img src={arrowRight} alt="" />
            </li>
            <li>
              <Link to='/fields' onClick={handleLinkClick}>Tədris sahələri</Link>
              <img src={arrowRight} alt="" />
            </li>
            <li>
              <Link to='/blogs' onClick={handleLinkClick}>Bloqlar</Link>
              <img src={arrowRight} alt="" />
            </li>
            <li>
              <Link to='/careers' onClick={handleLinkClick}>Karyera</Link>
              <img src={arrowRight} alt="" />
            </li>
          </ul>
          }
        </div>
      )}
    </>
  );
};

export default Sidenav;
