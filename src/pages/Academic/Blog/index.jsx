import React from 'react'
import './blog.scss'
import CategoryList from '../../../components/Category'
import BlogCard from '../../../components/Blog'
import { Helmet } from 'react-helmet'

const Blogs = () => {
  return (
    <div className='blogs-page'>
      <Helmet>
        <title>Bloqlar</title>
      </Helmet>
        <div className="blogs">
            <div className="blogs__title">
                <h1>Bloqlar</h1>
            </div>
            <CategoryList queryType="blogs"/>
            <div className="blogs__list">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
        </div>
    </div>
  )
}

export default Blogs