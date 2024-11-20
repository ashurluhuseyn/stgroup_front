import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { createBlog, getBlogById, updateBlog } from '../../../../api/blog';
import { getCategories } from '../../../../api/category';
import { createTeacher, getTeacherById, updateTeacher } from '../../../../api/teacher';

const TeacherForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [teacher, setTeacher] = useState({
    fullname: '',
    description: '',
    categoryID: '',
    image: null,
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (id) {
      getTeacherById(id).then(data => {
        setTeacher(data.teacher);
      }).catch(error => console.error("Error fetching teacher: ", error));
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setTeacher(prevData => ({ ...prevData, image: file.name }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append('fullname', teacher.fullname);
    formData.append('description', teacher.description);
    formData.append('categoryID', teacher.categoryID);
    
    if (imageFile) {
      formData.append('image', imageFile);
    }
  
    try {
      if (id) {
        await updateTeacher(id, formData);
        toast.success('Məlumat redaktə olundu');
      } else {
        await createTeacher(formData);
        toast.success('Məlumat əlavə olundu');
      }
      navigate('/admin/teachers');
    } catch (error) {
      console.error('Error during submission:', error.response ? error.response.data : error);
      toast.error('Xəta baş verdi: ' + (error.response ? error.response.data.message : 'Bilinməyən xəta'));
    }
  };
  
  return (
    <div className='admin-users'>
      <div className="admin-users__title mb-5 justify-content-center">
        <h1>{id ? 'Məlumatı yeniləyin' : 'Yeni təlimçi əlavə edin'}</h1>
      </div>
      <div className="admin-users__form">
        <div className="admin-users__form__container">
          <label htmlFor="">Ad, Soyad</label>
          <input value={teacher.fullname} onChange={(e) => setTeacher({ ...teacher, fullname: e.target.value })} />
        </div>
        <div className="admin-users__form__container">
          <label htmlFor="">Kateqoriya</label>
          <select value={teacher.categoryID} onChange={(e) => setTeacher({ ...teacher, categoryID: e.target.value })}>
            <option value="">Seçin</option>
            {
              data.map(item => (
                <option key={item.id} value={item.id}>{item.title}</option>
              ))
            }
          </select>
        </div>
        <div className="admin-users__form__container">
          <label htmlFor="">Təsvir</label>
          <input value={teacher.description} onChange={(e) => setTeacher({ ...teacher, description: e.target.value })} />
        </div>
        <div className="admin-users__form__container">
          <label htmlFor="file-upload" className="custom-file-upload">
            Şəkli seçin
          </label>
          <input 
            id="file-upload" 
            type="file" 
            onChange={handleImageChange}
          />
          {id && teacher.image && (
            <img src={`http://localhost:5000/uploads/teachers/${teacher.image}`} 
                 style={{ width: "250px", height: "250px", display: "block", marginTop: "24px" }} 
                 alt="Şəkil" />
          )}
        </div>
        <div className="admin-users__form__container">
          <button onClick={handleSubmit}>{id ? 'Yenilə' : 'Əlavə et'}</button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default TeacherForm;
