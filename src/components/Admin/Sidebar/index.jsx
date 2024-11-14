import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import { CiHome, CiUser, CiPen, CiPercent, CiCircleList, CiChat1, CiPower, CiGrid42, CiBullhorn, CiViewTimeline, CiViewList, CiFolderOn } from "react-icons/ci";
import './sidebar.scss';
import { useAuth } from '../../../context/authContext';

const Sidebar = () => {
  const { logout } = useAuth(); 
  const [isApplyDropdownOpen, setIsApplyDropdownOpen] = useState(false);

  const toggleApplyDropdown = () => {
    setIsApplyDropdownOpen(!isApplyDropdownOpen);
  };

  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar__nav">
        <ul>
          <li>
            <NavLink to='/admin'>
              <CiHome /> Ana səhifə
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/courses'>
              <CiFolderOn /> Kurslar
            </NavLink>
          </li>
          <li onClick={toggleApplyDropdown} className="dropdown">
            <div className="dropdown-toggle">
              <CiChat1 /> Müraciətlər
            </div>
            <ul className={`dropdown-menu ${isApplyDropdownOpen ? 'open' : ''}`}>
              <li>
                <NavLink to='/admin/apply/academic'>Akademik</NavLink>
              </li>
              <li>
                <NavLink to='/admin/apply/corporate'>Korporativ</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to='/admin/categories'>
              <CiGrid42 /> Kateqoriyalar
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/vacancies'>
              <CiBullhorn /> Vakansiyalar
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/services'>
              <CiViewTimeline /> Xidmətlərimiz
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/users'>
              <CiUser /> İstifadəçilər
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/advantages'>
              <CiPercent /> Üstünlüklərimiz
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/blogs'>
              <CiCircleList /> Bloqlar
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/events'>
              <CiPen /> Tədbirlər
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/about'>
              <CiViewList /> Haqqımızda
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin' onClick={logout}>
              <CiPower /> Çıxış
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
