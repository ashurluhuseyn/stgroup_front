import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getBlogById } from '../../../../api/blog';
import { getCategories } from '../../../../api/category';

const AdminEventsForm = () => {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [blog, setBlog] = useState({
    title: '',
    description: '',
    categoryId: '',
    image: null
  }) 

  useEffect(() => {
    if (id) {
        getBlogById(id).then(data => {
        setBlog(data.blog)
      }).catch(error => console.error("Error fetching blog: ", error));
    }
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
      <div className='admin-users'>
        <div className="admin-users__title mb-5 justify-content-center">
            <h1>{id ? 'Məlumatı yeniləyin' : 'Yeni bloq əlavə edin'}</h1>
        </div>
        <div className="admin-users__form">
              <div className="admin-users__form__container">
                  <label htmlFor="">Başlıq</label>
                  <input value={blog.title} onChange={(e) => setBlog({...blog, title: e.target.value})}/>
              </div>
              <div className="admin-users__form__container">
                  <label htmlFor="">Kateqoriya</label>
                  <select>
                    {
                      data.map(item => {
                        return(
                          <option value={item.id}>{item.title}</option>
                        )
                      })
                    }
                  </select>
              </div>
              <div className="admin-users__form__container">
                  <label htmlFor="">Təsvir</label>
                  <input value={blog.description} onChange={(e) => setBlog({...blog, description: e.target.value})} />
              </div>
              <div className="admin-users__form__container">
                  <label htmlFor="file-upload" className="custom-file-upload">
                      Şəkli seçin
                  </label>
                  <input id="file-upload" type="file" />
                  {
                    id && <img src={`http://localhost:5000/uploads/blogs/${blog.image}`} style={{width: "250px", height: "250px", display: "block", marginTop: "24px"}}  alt="" />
                  }
              </div>
              <div className="admin-users__form__container">
                <button onClick={handleSubmit} >{id ? 'Yenilə' : 'Əlavə et'}</button>
            </div>
            </div>
            
        <Toaster />
    </div>
  );
};

export default AdminEventsForm;
