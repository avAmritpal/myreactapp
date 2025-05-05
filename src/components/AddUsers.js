import React, { useState } from 'react';
import apiBaseService from '../services/apiBaseService.js';
import { useAuth } from '../services/AuthProvider.js'; 

const AddUsers = () => {

      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [age, setAge] = useState('');
      const [gender, setGender] = useState('');
      const [message, setMessage] = useState('');


      const handleAddUser = async (e) => {

            e.preventDefault();

        // Validate form fields
        if (!firstName || !lastName || !age || !gender) {
          setMessage('Please fill out all fields.');
          return;
        }
    
        try {
          // Prepare user data
          const userData = {
            firstName,
            lastName,
            age: parseInt(age, 10),
            gender,
          };
    console.log(userData);
          // Send POST request to a dummy API
          var response =await apiBaseService.post("/users/add",JSON.stringify(userData));

          if (response.ok) {
            const data = await response.json();
            setMessage(`User added successfully! ID: ${data.id}`);
            setFirstName('');
            setLastName('');
            setAge('');
            setGender('');
          } else {
            setMessage('Failed to add user. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          setMessage('An error occurred. Please try again later.');
        }
      };

return (

    <div className='container'>
    <div className='row  p-5'> 
         <div className='col-md-3'>
         </div>
         <div className='col-md-6 form-box'>
          <h2 className=' text-center'>Welcome to Login page!</h2>


          <form onSubmit={handleAddUser} className=''>
            <label>
                First Name
            </label>
            <input className='form-control' name='firstName' value={firstName} type='text' onChange={(e)=> setFirstName(e.target.value)}/>

            <label>
                Last Name
            </label>
            <input className='form-control' name='lastName' value={lastName} type='text'  onChange={(e)=> setLastName(e.target.value)}/>


            <label>
                Age
            </label>
            <input className='form-control' name='age' value={age} type='number' onChange={(e)=> setAge(e.target.value)}/>


            <div className="pt-3 d-flex justify-content-center align-items-center">
            <button className="btn btn-primary" type="submit">Add User</button>
            </div>


                </form> 

                {message && <p>{message}</p>}
          <div className='col-md-3'>
          </div>

          </div>
          </div>
          </div>



);

};




export default AddUsers;