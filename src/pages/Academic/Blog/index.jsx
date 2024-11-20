import React, { useEffect, useState } from 'react';
import './blog.scss';
import CategoryList from '../../../components/Category';
import BlogCard from '../../../components/Blog';
import { Helmet } from 'react-helmet';
import { getBlogs } from '../../../api/blog';
import AlertMessage from '../../../components/Alert';

const Blogs = () => {
  const [data, setData] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [emptyState, setEmptyState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs();
        setData(data.blogs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = (blogs) => {
    if (blogs === null) {
      setFilteredBlogs(data);
      setEmptyState(false);
    } else if (blogs.length === 0) {
      setEmptyState(true);
      setFilteredBlogs([]);
    } else {
      setEmptyState(false);
      setFilteredBlogs(blogs);
    }
  };


  return (
    <div className='blogs-page'>
      <Helmet>
        <title>Bloqlar</title>
      </Helmet>
      <div className="blogs">
        <div className="blogs__title">
          <h1>Bloqlar</h1>
        </div>
        <CategoryList queryType="blogs" onCategorySelect={handleCategorySelect} />
        <div className="blogs__list">
            {emptyState ? (
              <AlertMessage text='Bu kateqoriyaya uyğun məlumat yoxdur.'/>
            ) : filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => <BlogCard key={blog.id} data={blog} />)
            ) : (
              data.map((blog) => <BlogCard key={blog.id} data={blog} />)
            )}
          </div>
      </div>
    </div>
  );
};

export default Blogs;
