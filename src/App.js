import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Aboutus from './components/About.js';
import Login from './components/Login.js';
import Calculator from './components/calculator.js';
import Contact from './components/contact.js';
import Signup from './components/signup.js';
import Logout from './components/logout.js';
import './common.css';
import Footer from './components/Footer.js';
import UsersList from './components/UsersList.js';
import ProtectedRoute from './services/ProtectedRoute.js';
import AllProducts from './components/AllProducts.js';
import ConsumeCalculate from './components/consumeCalculate.js';
import SingleProduct from './components/SingleProduct.js';

const App = () => {

  return (

    <div>
      <Header />
      <main>
      <Routes>
      <Route path='/login' element={<Login />}/>
        <Route path='/' element={<ProtectedRoute> <Home /></ProtectedRoute>}/>       
        <Route path='/about' element={<ProtectedRoute><Aboutus /></ProtectedRoute>}/>
       
        <Route
        path="/calculator"
        element={
          <ProtectedRoute><Calculator /></ProtectedRoute>
            

        }
      />
        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/logout'  element={<Logout />}/>

        <Route path='/consumecalculate' element={<ProtectedRoute><ConsumeCalculate /></ProtectedRoute>}/>
        <Route path='/userslist' element={<ProtectedRoute><UsersList /></ProtectedRoute>}/>
        <Route path='/allproducts' element={<ProtectedRoute><AllProducts /> </ProtectedRoute>}/>
        <Route path="/singleproduct" element={<SingleProduct />} />

      </Routes>

      </main>
      <Footer/>
    </div>

  );
};


export default App;
