import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getCategories } from '../../../../api/category';
import { createEvent, getEventById, updateEvent } from '../../../../api/event';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const EventForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [event, setEvent] = useState({
    title: '',
    description: '',
    description2: '',
    categoryID: '',
    image: null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (id) {
      const fetchService = () => {
        getEventById(id)
          .then((data) => {
            setEvent({
              title: data.event?.title || '',
              description: data.event?.description || '',
              description2: data.event?.description2 || '',
              categoryID: data.event?.categoryID || '',
              image: null,
            });
          })
          .catch((error) => {
            console.error('Error fetching event:', error);
          });
      };
  
      fetchService();
    }
  }, [id]);
  

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
        toast.success('Xidmət uğurla yeniləndi!');
      } else {
        await createEvent(formData);
        toast.success('Xidmət uğurla yaradıldı!');
      }
      navigate('/admin/events');
    } catch (error) {
      console.error('Error submitting event:', error);
      toast.error('Xidmət göndərilərkən xəta baş verdi.');
    }
  };
  
  return (
    <div className="admin-users">
    <div className="admin-users__title mb-5 justify-content-center">
      <h1>{id ? 'Xidməti yeniləyin' : 'Yeni tedbir əlavə edin'}</h1>
    </div>
    <form onSubmit={handleSubmit} className="admin-users__form">
      <div className="admin-users__form__container">
        <label>Başlıq</label>
        <input
          type="text"
          name="title"
          value={event.title}
          onChange={handleInputChange}
          placeholder="Xidmət başlığı"
        />
      </div>
      <div className="admin-users__form__container">
        <label>Kateqoriya</label>
        <select
          name="categoryID"
          value={event.categoryID}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Kateqoriya seçin
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div className="admin-users__form__container">
        <label>Açıqlama</label>
        <textarea
          name="description"
          value={event.description}
          onChange={handleInputChange}
          placeholder="Qısa açıqlama"
        />
      </div>
      <div className="admin-users__form__container">
        <label>Ətraflı Açıqlama</label>
        <CKEditor
            editor={ClassicEditor}
            data={event.description2 || ''}
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
        <button type="submit">{id ? 'Yenilə' : 'Əlavə et'}</button>
      </div>
    </form>
    <Toaster />
  </div>
  );
};

export default EventForm;
