import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllUsers } from '../../../api/user';
import { CiTrash } from "react-icons/ci";

const AdminEvents = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className='admin-users'>
        <div className="admin-users__title mb-5">
            <h1>Bütün tədbirlər</h1>
            <Link to='/admin/users/new'>Yeni tədbir</Link>
        </div>
        <div className="admin-users__table">
          <table className='table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Rolu</th>
                  <th>Əməliyyatlar</th>
                </tr>
              </thead>
              <tbody>
                  {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className='btn btn-sm btn-danger'>
                        <CiTrash />
                      </button>
                    </td>
                  </tr>
                  ))}
              </tbody>
          </table>
        </div>
    </div>
  )
}

export default AdminEvents