import React, { useEffect, useState } from 'react'
import './services.scss'
import ServiceCard from '../../../components/Services/ServiceCard';
import { Helmet } from 'react-helmet';

const Services = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setCategories(['All', 'Business', 'English', 'Design']);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className='services'>
      <Helmet>
        <title>Xidmətlərimiz</title>
      </Helmet>
        <div className="services__title">
            <h1>Xidmətlərimiz</h1>
            <p>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI.</p>
        </div>
        <ul className="services__category">
            {categories.map((category) => (
            <li
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
            >
                {category}
            </li>
            ))}
        </ul>
        <div className="services__list" style={{marginTop: "32px"}}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
    </div>
  )
}

export default Services