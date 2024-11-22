import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteBlog, getBlogs } from '../../../api/blog';
import { getFormattedDate } from '../../../utils/date';
import toast from 'react-hot-toast';
import { IoTrashOutline, IoAddOutline, IoCreateOutline } from "react-icons/io5";

const tdCSS = {
  maxWidth: "550px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const AdminBlogs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Yükləmə statusu
  const [isError, setIsError] = useState(false); // Xəta statusu

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs();
        setData(data.blogs);
      } catch (error) {
        setIsError(true);
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false); // Yükləmə tamamlandı
      }
    };

    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteBlog(id);
      setData(prevData => prevData.filter(item => item.id !== id));
      toast.success('Məlumat silindi');
    } catch (error) {
      toast.error('Xəta baş verdi');
    }
  };

  return (
    <div className='admin-users'>
      <div className="admin-users__title mb-5">
        <h1>Bloqların siyahısı</h1>
        <Link to='/admin/blogs/form' className='d-flex align-items-center'><IoAddOutline /> Yeni bloq</Link>
      </div>
      <div className="admin-users__table">
        {isLoading ? (
          <div className="alert alert-info mx-auto w-25 text-center">Yüklənir...</div> // Yüklənmə mesajı
        ) : isError ? (
          <div className="alert alert-danger mx-auto w-25 text-center">Bloq yoxdur.</div> // Xəta mesajı
        ) : data.length > 0 ? (
          <table className='min-w-full divide-y divide-gray shadow-md bg-white'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Şəkli</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Başlıq</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Kateqoriyası</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Tarixi</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Əməliyyatlar</th>
              </tr>
            </thead>
            <tbody>
              {data.map(data => (
                <tr key={data.id}>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>
                    <img src={`http://localhost:5000/uploads/blogs/${data.image}`} alt="" />
                  </td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{data.title}</td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{data.category.title}</td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{getFormattedDate(data.createDate)}</td>
                  <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>
                    <Link to={`/admin/blogs/form/${data.id}`} className='btn btn-lg text-warning'>
                      <IoCreateOutline />
                    </Link>
                    <button onClick={() => deleteHandler(data.id)} className='btn btn-lg text-danger'>
                      <IoTrashOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-danger mx-auto w-25 text-center">Bloq tapılmadı...</div> // Blog yoxdur mesajı
        )}
      </div>
    </div>
  );
};

export default AdminBlogs;
