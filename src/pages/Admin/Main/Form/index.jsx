import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getDataById, updateData } from '../../../../api/home';

const MainForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    sectionTitle: '',
    sectionDescription: '',
    innerTitle: '',
    innerDescription: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    image: null
  })
  
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (id) {
      getDataById(id).then(data => {
        setData(data)
      }).catch(error => console.error("Error fetching data: ", error));
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setData((prevData) => ({ ...prevData, image: file.name }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append('sectionTitle', data.sectionTitle);
    formData.append('sectionDescription', data.sectionDescription);
    formData.append('innerTitle', data.innerTitle);
    formData.append('innerDescription', data.innerDescription);
    formData.append('option1', data.option1);
    formData.append('option2', data.option2);
    formData.append('option3', data.option3);
    formData.append('option4', data.option4);
  
    if (imageFile) {
      formData.append('image', imageFile);
    }
  
    try {
      if (id) {
        await updateData(id, formData);
        toast.success('Məlumat redaktə olundu');
      }
      navigate('/admin/home');
    } catch (error) {
      console.error('Error during submission:', error.response ? error.response.data : error);
      toast.error('Xəta baş verdi: ' + (error.response ? error.response.data.message : 'Bilinməyən xəta'));
    }
  };


  return (
    <div className='admin-users'>
     <div className="admin-users__title mb-5 justify-content-center">
        <h1>{id ? 'Məlumatı yeniləyin' : 'Yeni bloq əlavə edin'}</h1>
      </div>
      <div className="admin-users__form w-100 flex-row">
        <div className='w-1/2'>
          <div className="admin-users__form__container">
            <label htmlFor="">Banner Başlığı</label>
            <input value={data.sectionTitle} onChange={(e) => setData({ ...data, sectionTitle: e.target.value })} />
          </div>
          <div className="admin-users__form__container">
            <label htmlFor="">Banner Təsviri</label>
            <input value={data.sectionDescription} onChange={(e) => setData({ ...data, sectionDescription: e.target.value })} />
          </div>
          <div className="admin-users__form__container">
            <label htmlFor="">Alt Başlıq</label>
            <input value={data.innerTitle} onChange={(e) => setData({ ...data, innerTitle: e.target.value })} />
          </div>
          <div className="admin-users__form__container">
            <label htmlFor="">Alt Təsvir</label>
            <input value={data.innerDescription} onChange={(e) => setData({ ...data, innerDescription: e.target.value })} />
          </div>
        </div>
        <div className='w-1/2'>
          <div className="admin-users__form__container">
            <label htmlFor="">Option 1</label>
            <input value={data.option1} onChange={(e) => setData({ ...data, option1: e.target.value })} />
          </div>
          <div className="admin-users__form__container">
            <label htmlFor="">Option 2</label>
            <input value={data.option2} onChange={(e) => setData({ ...data, option2: e.target.value })} />
          </div>
          <div className="admin-users__form__container">
            <label htmlFor="">Option 3</label>
            <input value={data.option3} onChange={(e) => setData({ ...data, option3: e.target.value })} />
          </div>
          <div className="admin-users__form__container">
            <label htmlFor="">Option 4</label>
            <input value={data.option4} onChange={(e) => setData({ ...data, option4: e.target.value })} />
          </div>
          <div className="admin-users__form__container mt-3">
            <label htmlFor="file-upload" className="custom-file-upload">
              Şəkli seçin
            </label>
            <input 
              id="file-upload" 
              type="file" 
              onChange={handleImageChange}
            />
            {id && data.image && (
              <img src={`https://api.1stgroupacademy.com/uploads/home/${data.image}`} 
                  style={{ width: "250px", height: "250px", display: "block", marginTop: "24px" }} 
                  alt="Şəkil" />
            )}
          </div>
          <div className="admin-users__form__container mt-3">
            <button onClick={handleSubmit}>{id ? 'Yenilə' : 'Əlavə et'}</button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default MainForm;
