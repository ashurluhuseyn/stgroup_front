import React from 'react'
import './blog-card.scss'
import { Link } from 'react-router-dom'
import { getFormattedDate } from '../../utils/date'

const BlogCard = ({ data }) => {
  return (
    <div className='blog-card'>
       <Link to={`/blogs/${data.id}`}>
        <div className="blog-card__content">
              <div className="blog-card__content__img">
                <img src={`http://localhost:5000/uploads/blogs/${data.image}`} alt="" />
              </div>
              <div className="blog-card__content__title">
                  <h1>{data.title}</h1>
                  <p>{data.description.length > 50 ? data.description.slice(0,50) + "..." : data.description}</p>
                  <span>{getFormattedDate(data.createDate).slice(0,10)}</span>
              </div>
          </div>
       </Link>
    </div>
  )
}

export default BlogCard