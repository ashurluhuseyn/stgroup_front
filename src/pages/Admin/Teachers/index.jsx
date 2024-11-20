import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IoTrashOutline, IoAddOutline, IoCreateOutline } from "react-icons/io5";
import { deleteTeacher, getTeachers } from '../../../api/teacher';



const AdminTeachers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTeachers();
        setData(data.teachers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteTeacher(id);
      setData(prevData => prevData.filter(item => item.id !== id));
      toast.success('Məlumat silindi');
    } catch (error) {
      toast.error('Xəta baş verdi');
    }
  };

  return (
    <div className='admin-users'>
       <div className="admin-users__title mb-5">
            <h1>Bütün Təlimçilər</h1>
            <Link to='/admin/teachers/form' className='d-flex align-items-center'><IoAddOutline /> Yeni təlimçi</Link>
        </div>
        <div className="admin-users__table">
          <table className='min-w-full divide-y divide-gray bg-white rounded-2 shadow-md'>
              <thead className='divide-y divide-gray-200 bg-gray-200'>
                <tr>
                  <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>şəkli</th>
                  <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>ad, soyadı</th>
                  <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>sahəsi</th>
                  <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>əməliyyatlar</th>
                </tr>
              </thead>
              <tbody>
                  {data.map(item => (
                  <tr key={item.id}>
                    <td className='px-6 py-2 whitespace-nowrap text-sm text-gray border'>
                      <img src={`http://localhost:5000/uploads/teachers/${item.image}`} alt="" />
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap text-sm text-gray border'>{item.fullname}</td>
                    <td className='px-6 py-2 whitespace-nowrap text-sm text-gray border'>{item.category.title}</td>
                    <td className='px-6 py-2 whitespace-nowrap text-sm text-gray border'>
                    <Link to={`/admin/teachers/form/${item.id}`} className='btn btn-lg text-warning'>
                      <IoCreateOutline />
                      </Link>
                      <button onClick={() => deleteHandler(item.id)}  className='btn btn-lg text-danger'>
                        <IoTrashOutline />
                      </button>
                    </td>
                  </tr>
                  ))}
              </tbody>
          </table>
        </div>
    </div>
  );
};

export default AdminTeachers;