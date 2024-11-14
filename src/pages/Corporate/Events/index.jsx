import React, { useEffect, useState } from 'react';
import './events.scss';
import EventCard from '../../../components/Event';
import { Helmet } from 'react-helmet';
import CategoryList from '../../../components/Category';

const Events = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setCategories(['All', 'Business', 'English', 'Design']);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className='events'>
      <Helmet>
        <title>Tədbirlərimiz</title>
      </Helmet>
      <div className="events__title">
        <h1>Tədbirlərimiz</h1>
        <p>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI.</p>
      </div>
      <CategoryList categories={categories} activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
      <div className="events__list">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
