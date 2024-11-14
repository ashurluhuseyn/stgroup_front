import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Banner from '../../../../components/Banner/Edu'
import FieldCard from '../../../../components/Fields'
import arrowRight from '../../../../assets/images/arrow-right.svg'

import '../fields.scss'
import TeacherCard from '../../../../components/Teacher'

const FieldsDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    { title: "Month 1", content: "Content for the first item." },
    { title: "Month 2", content: "Content for the second item." },
    { title: "Month 3", content: "Content for the third item." },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='fields-details-page'>
        <Banner />
        <div className="plan-list">
            <div className="plan-list__title">
                <h1>Tədris Planı</h1>
            </div>
            <div className="plan-list__accordion">
                <div style={{borderRadius: "30px"}} className="max-w bg-white">
                    {data.map((item, index) => (
                        <div key={index}>
                        <button
                            className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className='accordion-title'>{item.title}</span>
                            <span>{openIndex === index ? "-" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-6 py-4 text-gray-700">
                            {item.content}
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="teachers-list">
            <div className="teachers-list__title">
                <h1>UX/UI Dizayn müəllimlərimiz</h1>
            </div>
            <div className="teachers-list__items">
                <TeacherCard />
                <TeacherCard />
            </div>
        </div>
        
        <div className="fields-list">
            <div className="fields-list__title">
                <h1>Tədris sahələri</h1>
                <Link to='/fields'>Daha çox <img src={arrowRight} alt="" /></Link>
            </div>
            <div className="fields-list__items">
                <FieldCard />
                <FieldCard />
                <FieldCard />
                <FieldCard />
                <FieldCard />
                <FieldCard />
            </div>
        </div>
    </div>
  )
}

export default FieldsDetails