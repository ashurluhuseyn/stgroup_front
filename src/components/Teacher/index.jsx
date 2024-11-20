import React from 'react'

const TeacherCard = ({ data }) => {
  console.log(data);
  return (
    <div className='teacher-card'>
      <div className="teacher-wrap">
        <div className="teacher-wrap__img">
          <img src={`http://localhost:5000/uploads/teachers/${data.image}`}  alt="" />
        </div>
        <div className="teacher-wrap__description">
          <h1>{data.fullname}</h1>
          <span>{data.category.title} üzrə təlimçi</span>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default TeacherCard