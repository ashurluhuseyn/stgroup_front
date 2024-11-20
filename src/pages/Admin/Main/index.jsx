import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoTrashOutline, IoCreateOutline } from "react-icons/io5";
import { getData, getDataForCo } from '../../../api/home';


const tdCSS = {
  maxWidth: "550px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}

const AdminMain = () => {
  const [data, setData] = useState();
  const [dataCo, setDataCo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const dataCo = await getDataForCo();
        setData(data);
        setDataCo(dataCo.homeData);
        console.log(dataCo.homeData);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='admin-users'>
        <div className='home-table'>
          <div className="admin-users__title mb-5">
              <h1>Ana səhifə (Akademik)</h1>
          </div>
          <div className="admin-users__table overflow-x-auto">
              {
              data && <table className='min-w-full divide-y divide-gray shadow-md bg-white'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Şəkil</th>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Başlıq 1</th>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Təsvir 1</th>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Başlıq 2</th>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Təsvir 2</th>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Əməliyyatlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                          <img src={`http://localhost:5000/uploads/home/${data.homeData.image}`} style={tdCSS} alt="" />
                      </td>
                      <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{data.homeData.sectionTitle}</td>
                      <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{data.homeData.sectionDescription.slice(0,20) + "..."}</td>
                     
                      <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{data.homeData.innerTitle}</td>
                      <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{data.homeData.innerDescription.slice(0,20) + "..."}</td>
                      <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>
                          <Link to={`/admin/home/form/${data.homeData.id}`} className='btn btn-sm bg-warning text-white'>
                              Edit
                            </Link>
                      </td>
                    </tr>
                  </tbody>
              </table>
                }
          </div>
        </div>
        <div className='home-table mt-5'>
          <div className="admin-users__title mb-5">
              <h1>Ana səhifə (Korporativ)</h1>
          </div>
          <div className="admin-users__table overflow-x-auto">
              {
              dataCo && <table className='min-w-full divide-y divide-gray shadow-md bg-white'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Başlıq</th>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Təsvir</th>
                      <th className='px-6 py-3 text-center text-xs font-medium text-gray uppercase tracking-wider border'>Əməliyyatlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{dataCo.sectionTitle}</td>
                      <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>{dataCo.sectionDescription.slice(0,40) + "..."}</td>
                      <td className='px-6 py-1 whitespace-nowrap text-sm text-gray border'>
                          <Link to={`/admin/home/form/${dataCo.id}`} className='btn btn-sm bg-warning text-white'>
                              Edit
                            </Link>
                      </td>
                    </tr>
                  </tbody>
              </table>
                }
          </div>
        </div>
    </div>
  )
}

export default AdminMain