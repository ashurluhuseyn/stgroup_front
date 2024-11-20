import React, { useEffect, useState } from 'react'
import CategoryList from '../../../components/Category'
import './fields.scss'
import FieldCard from '../../../components/Fields'
import { Helmet } from 'react-helmet'
import { getCourses } from '../../../api/course'
import AlertMessage from '../../../components/Alert'

const Fields = () => {
  const [data, setData] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [emptyState, setEmptyState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses();
        setData(data.courses);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = (courses) => {
    if (courses === null) {
      setFilteredCourses(data);
      setEmptyState(false);
    } else if (courses.length === 0) {
      setEmptyState(true);
      setFilteredCourses([]);
    } else {
      setEmptyState(false);
      setFilteredCourses(courses);
    }
  };
  return (
    <div className='fields-page'>
      <Helmet>
        <title>Tədris sahələri</title>
      </Helmet>
        <div className="fields">
            <div className="fields__title">
                <h1>Tədris sahələri</h1>
            </div>
            <CategoryList queryType="fields" onCategorySelect={handleCategorySelect} />
            <div className="fields__list">
              {emptyState ? (
                <AlertMessage text='Bu kateqoriyaya uyğun məlumat yoxdur.'/>
              ) : filteredCourses.length > 0 ? (
                filteredCourses.map(course => <FieldCard key={course.id} data={course} />)
              ) : (
                data.map(course => <FieldCard key={course.id} data={course} />)
              )}
            </div>
        </div>
    </div>
  )
}

export default Fields