import React, { useState } from 'react';

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmpassword);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (name && email && password) {
            alert('Form Submit Successfully');

        } else {
            alert('All Fields Mandatory');
        };
    };













    return (

        <div className="container form-row">
            <div className="row text-align-center p-5">

                <h1 className='w-100 text-center pb-4'> SignUp Form </h1>

                <div className="col-md-2"> </div>


                <div className="col-md-8 form-box">

                    <form onSubmit={handleSubmit}>

                        <label className='text-left pb-1 w-100'>User Name</label>
                        <input className='form-control' type="text" name="name" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                        {<p className={name ? "data" : "noData"}>{name ? "" : "Name is required"}</p>}

                        <label className='text-left pb-1 w-100'>Email</label>
                        <input className='form-control' type="email" name="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                        {<p className={email ? "data" : "noData"}>{email ? "" : "Email Required"}</p>}

                        <label className='text-left pb-1 w-100'>Password</label>
                        <input className='form-control' type="text" name="password" placeholder='Type Password' onChange={(e) => setPassword(e.target.value)} />
                        { <p className={password? "data" : "noData"}>{password? "" : "Password Required"}</p>}

                        <label className='text-left pb-1 w-100'>Confirm Password</label>
                        <input className='form-control' type="password" name="confirmpassword" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                        { <p className={confirmpassword? "data" : "noData"}>{confirmpassword? "" : "Type Again"}</p>}

                        <div>
                            <button className="btn btn-danger mt-4" type='submit' name='submit'>Sign Up</button>
                        </div>




                    </form>
                </div>

                <div className="col-md-2"> </div>




            </div>
        </div>


    );





};

export default Signup;