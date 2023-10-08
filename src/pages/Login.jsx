import login from '../assets/login.jpg';
import '../assets/styles/login.css';
import { FormInput, AuthButton } from '../components';
import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Form method='post' className='main-container justify-content-center'>
        <div className='m-auto grid grid-cols-2'>
          <div className='img-container'>
            <img className='object-cover' src={login} alt="cat" style={{
                      backgroundSize: "cover",
            }}/>
            </div>
            <div className='form-container'>
              <div className='outer'> 
                <div className='auth-form form-control inner'>
                  <h3 className='text-center mt-2'>Login</h3>
                  <FormInput type="email" label="email" name="identifier" defaultValue='example@example.com' className='w-100 mt-2' />
                  <FormInput type="password" label="password" name="password" defaultValue='secret12345' className='w-100 mt-2'/>
                  <AuthButton>Login</AuthButton>
                  <p className='text-center'>Or <Link to="/register"><AuthButton>Demo User</AuthButton></Link></p>
                  <p className='text-center'>Not registered? <Link className='link link-hover link-primary capitalize' to="/register">Register</Link> </p>
                </div>
              </div>
            </div>
          </div>
        </Form>
    </>
  )
}