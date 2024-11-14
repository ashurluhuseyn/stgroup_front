import React, { useState } from 'react'
import './career.scss'
import VacancyCard from '../../../components/Career';
import { Helmet } from 'react-helmet';

const Career = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className='career-page'>
        <Helmet>
        <title>Vakansiyalar</title>
        </Helmet>
        <div className="career">
            <div className="career__title">
                <h1>Gəl bizə qoşul!</h1>
                <div onClick={toggleDropdown} className="category-dropdown">
                    <div className="dropdown-title">
                     Kateqoriyalar
                    </div>
                    <ul className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                    <li>Dizayn</li>
                    <li>İngilis dili</li>
                    <li>Developer</li>
                    <li>Biznes</li>
                    </ul>
                </div>
            </div>
            <div className="career__list">
                <VacancyCard />
                <VacancyCard />
                <VacancyCard />
                <VacancyCard />
                <VacancyCard />
                <VacancyCard />
                <VacancyCard />
                <VacancyCard />
                <VacancyCard />
            </div>
        </div>
    </div>
  )
}

export default Career