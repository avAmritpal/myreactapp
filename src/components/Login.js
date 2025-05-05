
import React, { useState } from 'react';
import apiBaseService from '../services/apiBaseService.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../services/AuthProvider.js'; 
function Login() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {

    e.preventDefault();
    // Example API request body
    const credentials = { username, password };

    

    try {
      var response =await apiBaseService.post("auth/login",JSON.stringify(credentials));
        // Parse response data
        if (response) {
          // Parse response data
          const data = await response;
          
          // Assuming the token is in `data.token`
          const token = data.accessToken;
      
          if (token) {
            // Store the token in local storage
            login(token);
            console.log('Login successful and token stored:', token);
            
            // Redirect user or handle post-login actions
            // e.g., window.location.href = "/dashboard";
          } else {
            console.error('Token not found in response:', data);
          }
        } else {
          console.error('Login failed:', response.statusText);
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error during API request:', error);
        alert('An error occurred during the login process.');
      }
    };


  return (

  <div className='container'>
          <div className='row  p-5'> 
               <div className='col-md-3'>
               </div>
               <div className='col-md-6 form-box'>
                <h2 className=' text-center'>Welcome to Login page!</h2>

                <form onSubmit={handleSubmit} className=''>
                  <label>User Name</label>
                  <input className='form-control' name='username' value={username} type='text' onChange={(e) => setUserName(e.target.value)}/>
                  <p className={username? "data":"noData"}>{username? "" : "Enter Name"}</p>
                  <label>Password</label>
                  <input  className='form-control' type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                  <p className={password? "data" : "noData"}>{password? "":"Enter Password"}</p>
                  <div className="pt-3 d-flex justify-content-center align-items-center">

                    <button className="btn btn-primary" type="submit">Login</button>
                  </div>
                </form> 
               </div>
              

               
          </div>
           
        </div>
 
  );
}

export default Login;