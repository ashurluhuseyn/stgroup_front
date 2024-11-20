import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Banner from '../../../../components/Banner/Edu'
import FieldCard from '../../../../components/Fields'
import arrowRight from '../../../../assets/images/arrow-right.svg'

import '../fields.scss'
import TeacherCard from '../../../../components/Teacher'
import { getCourseDetails } from '../../../../api/course'
import AlertMessage from '../../../../components/Alert'

const FieldsDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState();
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
        try {
            const data = await getCourseDetails(id);
            console.log(data);
            
            setData(data)
        } catch (error) {
            console.error('Error fetching details:', error);
        }
    };

    fetchBlog();
  }, []);
  

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='fields-details-page'>
        {
            data ? <>
                <Banner path='courses' data={data.course}/>
        <div className="fields-adv">
            <h1>Tədrisimizin Üstünlüyü</h1>
            <div className="fields-adv__wrap">
                {
                    data.plans && data.plans.length > 0 ? data.plans.map(item => {
                        return(
                            <div key={item.id} className="fields-adv__wrap__item">
                                <div className="fields-adv__wrap__item__img">
                                    <div>
                                        <img  src={`http://localhost:5000/uploads/plans/${item.image}`}  alt="" />
                                    </div>
                                    <span>{item.title}</span>
                                </div>
                                <div className="fields-adv__wrap__item__text">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    }) : "Plan yoxdur..."
                }
            </div>
        </div>
        <div className="plan-list">
            <div className="plan-list__title">
                <h1>Tədris Planı</h1>
            </div>
            <div className="plan-list__accordion">
                <div style={{borderRadius: "30px"}} className="max-w bg-white">
                    {data.trainingPlans && data.trainingPlans.length > 0 ? data.trainingPlans.map(item => (
                        <div key={item.id}>
                        <button
                            className="flex justify-between items-center w-full py-3 px-6 text-left focus:outline-none"
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <span className='accordion-title'>{item.title}</span>
                            <span>{openIndex === item.id ? "-" : "+"}</span>
                        </button>
                        {openIndex === item.id && (
                            <div className="px-6 py-2">
                                <p className='accordion-content'>{item.description}</p>
                            </div>
                        )}
                        </div>
                    )) : <AlertMessage text='Bu tədrisin sillabusu yoxdur...'/>
                } 
                </div>
            </div>
        </div>
        <div className="teachers-list">
            <div className="teachers-list__title">
                <h1>{data.course.title} <span style={{fontWeight: "300"}}>müəllimlərimiz</span></h1>
            </div>
            <div className="teachers-list__items">
                {
                    data.teachers.length > 0 ? data.teachers.map(item => {
                        return(
                            <TeacherCard key={item.id} data={item}/>
                        )
                    }) : <AlertMessage text="Bu tədris üçün müəllim yoxdur..."/>
                }
            </div>
        </div>
        
        <div className="fields-list">
            <div className="fields-list__title">
                <h1>Tədris sahələri</h1>
                <Link to='/fields'>Daha çox <img src={arrowRight} alt="" /></Link>
            </div>
            <div className="fields-list__items">
                {
                    data.otherCourses && data.otherCourses.length > 0 ? data.otherCourses.map(item => {
                        return(
                            <FieldCard key={item.id} data={item}/> 
                        )
                    }) : <AlertMessage text='Kurs yoxdur.'/>
                }
            </div>
        </div> 
            </> : "yuklenir"
        }
    </div>
  )
}

export default FieldsDetails