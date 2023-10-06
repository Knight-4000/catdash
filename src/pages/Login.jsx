import React from 'react'
import login from '../assets/login.jpg';
import '../components/login.css';
import AuthButton from '../components/AuthButton';

export default function Login() {
  return (
    <>
      <div className='main-container justify-content-center'>
        <div className='m-auto grid grid-cols-2'>
          <div className='img-container'>
            <img className='object-cover' src={login} alt="car" style={{
                      backgroundSize: "cover",
            }}/>
            </div>
            <div className='form-container'>
            <div className='outer'> 
                <form className='form-control inner'>
                  <h3 className='text-center mt-2'>Login</h3>
                  <input type="text" className='w-100 mt-2' placeholder='Username'/>
                  <input type="password" className='w-100 mt-2' placeholder='Password'/>
                  <AuthButton>Login</AuthButton>
                </form>
              </div>
            </div>
            </div>
          </div>
    </>
  )
}