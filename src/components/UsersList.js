import React, { useEffect, useState } from 'react';
import apiBaseService from '../services/apiBaseService.js'; // Ensure this service is implemented

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', age: '', gender: '' });
  const [editUser, setEditUser] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await apiBaseService.get('/users');
      if (!response) {
        throw new Error('Failed to fetch users');
      }
      setUsers(response.users || []); // Assuming 'users' is the key in the API response
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  const handleAddUser = (user) => {
    setNewUser(user);
    setEditFormData({ ...user });
  };
  // Handle input changes for adding a user
  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Add user
  const addUser = async (e) => {
    e.preventDefault();
    try {
      const response = await apiBaseService.post('/users/add', newUser);
      const addedUser = await response;
      setUsers([...users, addedUser]);
      setNewUser({ firstName: '', lastName: '', age: '', gender: '' });
      alert('User added successfully!');
    } catch (err) {
      alert('Failed to add user.');
    }
  };

  // Handle edit button click
  const handleEditClick = (user) => {
    setEditUser(user);
    setEditFormData({ ...user });
  };

  // Handle input changes for editing a user
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Update user
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await apiBaseService.put(`/users/${editUser.id}`, editFormData);
      const updatedUser = await response;
      setUsers(users.map((user) => (user.id === editUser.id ? updatedUser : user)));
      setEditUser(null);
      alert('User updated successfully!');
    } catch (err) {
      alert('Failed to update user.');
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await apiBaseService.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert('User deleted successfully!');
    } catch (err) {
      alert('Failed to delete user.');
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="container">
      <h1 className="text-center my-4">Users List</h1>
      <div className='add-btn'> <button  className="btn btn-Success me-2" onClick={() => {setShowAddModal(true);
    }}>
      Add User </button></div>


      {/* Users Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit User Modal */}
      {editUser && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button type="button" className="btn-close" onClick={() => setEditUser(null)}></button>
              </div>
              <form onSubmit={updateUser}>
                <div className="modal-body">
                  <input
                    type="text" className='form-control'
                    name="firstName"
                    placeholder="First Name"
                    value={editFormData.firstName}
                    onChange={handleEditInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName" className='form-control'
                    placeholder="Last Name"
                    value={editFormData.lastName}
                    onChange={handleEditInputChange}
                    required
                  />
                  <input
                    type="number"
                    name="age" className='form-control'
                    placeholder="Age"
                    value={editFormData.age}
                    onChange={handleEditInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="gender" 
                    placeholder="Gender"
                    value={editFormData.gender}
                    onChange={handleEditInputChange}
                    required className='form-control'
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setEditUser(null)}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}




                          {/* Add User */}

                          {showAddModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add User</h5>
                <button type="button" className="btn-close" onClick={() => {setShowAddModal(false);
    }}></button>
              </div>
              <form className="mb-4" onSubmit={addUser}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newUser.firstName} className='form-control'
          onChange={handleNewUserChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newUser.lastName} className='form-control'
          onChange={handleNewUserChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newUser.age} className='form-control'
          onChange={handleNewUserChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender" className='form-control'
          value={newUser.gender}
          onChange={handleNewUserChange}
          required
        />
                        <div className="modal-footer">
        <button type="submit" className="btn btn-success" >Add User</button>
        </div>
      </form>
            </div>
          </div>
        </div>
      )}



    </div>
  );
};

export default UsersList;
