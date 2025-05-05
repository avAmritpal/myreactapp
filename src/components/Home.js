import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiBaseService from '../services/apiBaseService.js';
function Home() {
  const navigate = useNavigate('');

  useEffect((token) => {
    if (localStorage.setItem('authToken', token)) {
      navigate('/login');
    }

  }, [])

  return (
    <div className='container'>
      <div className='row text-center home-box'>
        <h2>Welcome to the Home Page</h2>
        <br />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
};

export default Home