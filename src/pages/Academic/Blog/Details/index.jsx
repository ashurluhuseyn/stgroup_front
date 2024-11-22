import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import '../blog.scss'

import calendar from '../../../../assets/images/calendar.svg'
import BlogCard from '../../../../components/Blog'
import JoinUs from '../../../../components/JoinUs'
import { getBlogDetails } from '../../../../api/blog'
import { getFormattedDate } from '../../../../utils/date'
import LoadMore from '../../../../components/LoadMore'
import AlertMessage from '../../../../components/Alert'

const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState();

    useEffect(() => {
        const fetchBlog = async () => {
        try {
            const data = await getBlogDetails(id);
            setBlog(data)
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    fetchBlog();
  }, []);
  
  return (
    <div className='blog-details'>
       {
        blog ? <>
             <Helmet>
        <title>{blog.blog.title}-</title>
        </Helmet>
        <ul className="breadcrumb">
                <li>
                    <Link to='/blogs'>Bloq</Link>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li>
                    <Link to={`/blogs/${blog.blog.id}`}>{blog.blog.title}</Link>
                </li>
        </ul>
        <div className="details">
            <h1>Blog</h1>
            <div className="details__wrap">
                <div className="details__wrap__img">
                    <img src={`https://1stgroupacademy.com/uploads/blogs/${blog.blog.image}`}  alt="Blog image" />
                </div>
                <div className="details__wrap__content">
                    <h2>{blog.blog.title}</h2>
                    <p>{blog.blog.description}</p>
                    <ul>
                        <li>
                            <img src={calendar} alt="" />
                            <span>{blog.blog.category.title}</span>
                        </li>
                        <li>
                            <img src={calendar} alt="" />
                            <span>{getFormattedDate(blog.blog.createDate)}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="similar-blogs">
            <div className="similar-blogs__title">
                <h2>Oxşar bloglar</h2>
                <LoadMore link='/blogs'/>
            </div>
            <div className="similar-blogs__list">
                {
                    blog.relatedBlogs.length > 0 ? blog.relatedBlogs.map(blog => {
                        return(
                            <BlogCard key={blog.id} data={blog}/>
                        )
                    }) : <AlertMessage text='Bu kateqoriyaya uyğun bloq yoxdur.'/>
                }
            </div>
            <JoinUs />
        </div>
        </> : 'yuklenir...'
       }
    </div>
  )
}

export default BlogDetails
