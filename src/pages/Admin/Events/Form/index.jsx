import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getCategories } from '../../../../api/category';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { createEvent, getEventById, updateEvent } from '../../../../api/event';

const EventForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [event, setEvent] = useState({
    title: '',
    description: '',
    description2: '',
    categoryID: '',
    image: null,
  });


  useEffect(() => {
    if (id) {
      getEventById(id).then(data => {
        setEvent(data.event);
      }).catch(error => console.error("Error fetching event: ", error));
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleFileChange = (e) => {
    setEvent({ ...event, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append('title', event.title);
    formData.append('description', event.description);
    formData.append('description2', event.description2);
    formData.append('categoryID', event.categoryID);
    if (event.image) formData.append('image', event.image);

    try {
      if (id) {
        await updateEvent(id, formData);
        toast.success('Məlumat redaktə olundu');
      } else {
        await createEvent(formData);
        toast.success('Məlumat əlavə olundu');
      }
      navigate('/admin/events');
    } catch (error) {
      console.error('Error during submission:', error.response ? error.response.data : error);
      toast.error('Xəta baş verdi: ' + (error.response ? error.response.data.message : 'Bilinməyən xəta'));
    }
  };

  return (
    <div className="admin-users">
    <div className="admin-users__title mb-5 justify-content-center">
        <h1>{id ? 'Məlumatı yeniləyin' : 'Yeni bloq əlavə edin'}</h1>
      </div>
      <div className="admin-users__form">
        <div className="admin-users__form__container">
          <label htmlFor="">Başlıq</label>
          <input value={event.title} onChange={handleInputChange} name='title' />
        </div>
        <div className="admin-users__form__container">
          <label htmlFor="">Kateqoriya</label>
          <select value={event.categoryID} name='categoryID' onChange={handleInputChange}>
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
          <input name="description" value={event.description} onChange={handleInputChange} />
        </div>
        <div className="admin-users__form__container">
        <label>Ətraflı Açıqlama</label>
        <CKEditor
            editor={ClassicEditor}
            data={event.description2 || ''} // Əgər undefined və ya null olarsa, boş string kimi istifadə olunur
            onChange={(event, editor) => {
              const data = editor.getData();
              setEvent({ ...event, description2: data });
            }}
          />
      </div>
        
        <div className="admin-users__form__container">
          <label htmlFor="file-upload" className="custom-file-upload">
            Şəkli seçin
          </label>
          <input 
            id="file-upload" 
            type="file" 
            onChange={handleFileChange}
          />
        </div>
        <div className="admin-users__form__container">
          <button onClick={handleSubmit}>{id ? 'Yenilə' : 'Əlavə et'}</button>
        </div>
      </div>
      <Toaster />
  </div>
  );
};

export default EventForm;
