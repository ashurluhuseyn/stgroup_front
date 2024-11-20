import React, { useEffect, useState } from 'react'
import './career.scss'
import VacancyCard from '../../../components/Career';
import { Helmet } from 'react-helmet';
import { getVacancies } from '../../../api/vacancy';
import { getCategories } from '../../../api/category';

const Career = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [data, setData] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const [vacanciesData, categoriesData] = await Promise.all([
            getVacancies(),
            getCategories(),
            ]);

            setData(vacanciesData.vacancies);
            setCategories(categoriesData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className='career-page'>
        {
            data ? <>
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
                        {
                            categories && categories.map(item => {
                                return(
                                    <li key={item.id}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="career__list">
                {
                    data && data.length > 0 ? data.map(item => {
                        return(
                            <VacancyCard key={item.id} data={item} />
                        )
                    }) : 'Vakansiya tapılmadı'
                }
            </div>
        </div>
            </> : 'Yuklenir...'
        }
    </div>
  )
}

export default Career