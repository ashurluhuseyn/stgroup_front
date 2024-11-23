import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFormattedDate } from '../../../utils/date';
import toast from 'react-hot-toast';
import { IoTrashOutline, IoAddOutline, IoCreateOutline } from "react-icons/io5";
import { deleteEvent, getEvents } from '../../../api/event';


const tdCSS = {
  maxWidth: "550px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}


const AdminEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEvents();
        setData(data.events)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
        await deleteEvent(id);
        setData(prevData => prevData.filter(item => item.id !== id));
        toast.success('Məlumat silindi')
    } catch (error) {
        toast.error('Xəta baş verdi')
    }
  }


  return (
    <div className='admin-users'>
        <div className="admin-users__title mb-5">
            <h1>Tədbirlərin siyahısı</h1>
            <Link to='/admin/events/form' className='d-flex align-items-center'><IoAddOutline /> Yeni tədbir</Link>
        </div>
        <div className="admin-users__table">
          {
            data.length > 0 ? <table className='min-w-full divide-y divide-gray shadow-md bg-white'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Şəkli</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Başlıq</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Təsvir</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Kateqoriyası</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Tarixi</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Əməliyyatlar</th>
              </tr>
            </thead>
            <tbody>
                {data.map(data => (
                <tr key={data.id}>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>
                    <img src={`https://api.1stgroupacademy.com/uploads/events/${data.image}`} alt="" />
                  </td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{data.title}</td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border' style={tdCSS}>{data.description}</td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{data.category.title}</td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{getFormattedDate(data.createDate)}</td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>
                    <Link to={`/admin/events/form/${data.id}`} className='btn btn-lg text-warning'>
                      <IoCreateOutline />
                    </Link>
                    <button onClick={() => deleteHandler(data.id)} className='btn btn-lg text-danger'>
                      <IoTrashOutline />
                    </button>
                  </td>
                </tr>
                ))}
            </tbody>
        </table> : <div className="alert alert-danger mx-auto w-25 text-center">Xidmət tapılmadı...</div>
          }
        </div>
    </div>
  )
}

export default AdminEvents
