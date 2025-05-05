import React, { useState } from "react";

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
   // e.preventDefault();
    if (name && email) {

      if (email) {
        alert('Sign Up Successfully')
      } else {
        alert('ERR: Please Enter Email')
      }
    } else {
      alert("All Fields are Mandatory")
    };


    const contactData = { name, email, message };

    try {
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response) {

        setName('');
        setEmail('');
        setMessage('');
      } else {

      }
    } catch (error) {
      console.error('Error:', error);

    }
  };

  return (
    <div className='container'>
      <div className='row  p-5'>
        <div className='col-md-2'>
        </div>
        <div className='col-md-8 form-box'>
          <h2 className=' text-center'>Welcome to Contact page!</h2>

          <form onSubmit={handleSubmit} className=''>
            <label>User Name</label>
            <input className='form-control' name='name' value={name} type='text' onChange={(e) => setName(e.target.value)} />
            <p className={name ? "data":"noData"}>{name? "" : "Add user Name"}</p>
            <label>Email</label>
            <input className='form-control' type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
            <p className={email?"data":"noData"}>{email? "" : "Add Email"}</p>
            <label>Message</label>
            <textarea className='form-control' type='message' value={message} name='message' onChange={(e) => setMessage(e.target.value)} />

            <div className="pt-3 d-flex justify-content-center align-items-center">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>



          </form>
        </div>

        <div className='col-md-2'>
        </div>


      </div>

    </div>

  );
};



export default Contact;

