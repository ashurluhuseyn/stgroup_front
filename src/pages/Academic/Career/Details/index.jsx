import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../career.scss';

import linkImg from '../../../../assets/images/link.svg';
import arrowRight from '../../../../assets/images/arrow-right.svg';
import { getVacancyById } from '../../../../api/vacancy';
import { getFormattedDate } from '../../../../utils/date';
import toast from 'react-hot-toast';
import { createJobApplication } from '../../../../api/jobApply';

const CareerDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    cv: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVacancyById(id);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.lastname || !formData.cv) {
      toast.error('Zəhmət olmasa, bütün sahələri doldurun və CV yükləyin.');
      return;
    }

    const submissionData = new FormData();
    submissionData.append('firstname', formData.firstname);
    submissionData.append('lastname', formData.lastname);
    submissionData.append('cv', formData.cv);
    submissionData.append('vacancyID', parseInt(id, 10)); // ID-ni integer kimi göndəririk

    try {
      await createJobApplication(id, submissionData);
      toast.success('Müraciətiniz uğurla göndərildi!');
      setFormData({ firstname: '', lastname: '', cv: null });
    } catch (error) {
      toast.error('Müraciət göndərilərkən xəta baş verdi.');
    }
  };

  return (
    <div className='career-details'>
      {data ? (
        <>
          <ul className="breadcrumb">
            <li>
              <Link to='/careers'>Karyera</Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link to={`/careers/${id}`}>{data.title}</Link>
            </li>
          </ul>
          <div className="career-details__content">
            <h2 className=''>Gəl bizə qoşul!</h2>
            <div className="career-details__content__title">
              <h1>{data.title}</h1>
              <span>Son müraciət tarixi: <span className='vacancy-deadline'>{getFormattedDate(data.deadline).slice(0, 10)}</span></span>
            </div>
            <div className="career-details__content__list">
              <div className='list-elem'>
                <h4>Tələblərimiz</h4>
                <div dangerouslySetInnerHTML={{ __html: data.requirements }} />
              </div>
              <div className='list-elem'>
                <h4>Vəzifələriniz</h4>
                <div dangerouslySetInnerHTML={{ __html: data.duties }} />
              </div>
              <div className='list-elem'>
                <h4>Şərtlərimiz</h4>
                <div dangerouslySetInnerHTML={{ __html: data.conditions }} />
              </div>
              <div className='list-elem'>
                <h4>Müraciət et</h4>
                <form onSubmit={handleSubmit}>
                  <div className='input-group'> 
                    <div className='input-group__row'>
                      <input
                        type="text"
                        placeholder='Ad'
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder='Soyad'
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="admin-users__form__container">
                      <label htmlFor="file-upload" className="custom-cv-upload">
                        <img src={linkImg} alt="" /> CV yüklə
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="input-group-btn">
                      <button type="submit">
                        Göndər <img src={arrowRight} alt="" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Yüklənir..."
      )}
    </div>
  );
};

export default CareerDetails;
