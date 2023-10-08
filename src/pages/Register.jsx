import { useState, useEffect } from 'react';
import { Link, Form } from 'react-router-dom';
import FormInput from '../components/FormInput';
import register from '../assets/register.jpg'
import '../assets/styles/login.css'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FcCancel } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("");

  const [showPassword, setShowPassword] = useState (false);
  const [showInstructions, setShowInstructions] = useState (false);

  // Password Strength State
  const [pass, setPass] = useState("");
  const [passLetter, setPassLetter] = useState("");
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passComplete, setPassComplete] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword)
  };

  const toggleCPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleShowInstructions = () => {
    setShowInstructions(true)
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value)
    setPassword(e.target.value)
  };

  // Password Strength UseEffect

  useEffect(() => {
    if (pass.match (/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true)
    } else {
      setPassLetter(false)
    }

    if (pass.match(/([0-9])/)) {
      setPassNumber(true)
    } else {
      setPassNumber(false)
    }

    if (pass.match(/([!,%,&,@,$,#,^,*,?,_,`])/)) {
      setPassChar(true)
    } else {
      setPassChar(false)
    }

    if(pass.length > 7) {
      setPassLength(true)
    } else {
      setPassLength(false)
    }

    if (passLetter && passNumber && passChar && passLength) {
      setPassComplete(true)

    } else {
      setPassComplete(false)
    }
  }, [pass, passLetter, passNumber, passChar, passLength])
  return (
    <Form method='post'>
    <h1 className='banner text-center mt-2'>Register</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='img-container'>
          <img className='object-cover' src={register} alt="cat" style={{
                      backgroundSize: "cover",
          }}/>
        </div>
        <div className='form-container mb-5'>
          <div className='outer'>
            <div className='auth-form form-control inner py-4'>
            <h1 className='banner text-center'>Register</h1>
                <div className="mb-1">
                  <FormInput type='email' label='Email' name='email' required value={email} 
                     onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-1 password">
                <FormInput type={showPassword ? "text" : "password"}
                    label='Password'
                    onFocus={handleShowInstructions}
                    required value={password}
                    onChange={handlePasswordChange}
                 />
                    <span className='icon' onClick={togglePassword}>
                      {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
                    </span>
                  </div>
                  <div className="mb-1 confirm-password">
                  <FormInput type={showPassword ? "text" : "password"} label='Confirm Password' 
                    name='password' required value={cPassword} onChange={(e) => setCPassword(e.target.value)}
                    />
                </div>
                <button disabled={!passComplete} type="submit"
                  className={passComplete ? "mb-6 mt-2 w-full px-7 py-3 bg-blue-600 text-white text-sm uppercase rounded" :
                  "mb-6 mt-2 w-full px-7 py-3 bg-gray-500 disabled text-white text-sm uppercase rounded"}
                >Sign Up</button>
                <div className='flex'>
                  <p className='pr-2'>Already have an account?</p><Link to="/login" className='register'>
                    Login
                </Link>
                </div>
                {/* Password Strength */}
              <div className={showInstructions ? "show-hints" : "hide-hints"}>
                <div className='reasons-list bg-gray-200 py-2'>
                  <ul className='list-none'>
                  <p>Password Strength</p>
                  <li className={passLetter ? "pass-check" : "fail-red"}>
                    <span className='inline-flex'>
                      {passLetter ? <FaCheck /> : <FcCancel />}
                      <p>Lowercase & Uppercase</p>
                    </span>
                  </li>
                    <li className={passNumber ? "pass-check" : "fail-red"}>
                      <span className='inline-flex'>
                      {passNumber ? <FaCheck /> : <FcCancel />}
                        <p>Numbers 0-9</p>
                      </span>
                    </li>
                    <li className={passChar ? "pass-check" : "fail-red"}>
                      <span className='inline-flex'>
                      {passChar ? <FaCheck /> : <FcCancel />}
                        <p>Special characters (!@#$%)</p>
                      </span>
                    </li>
                    <li className={passLength ? "pass-check" : "fail-red"}>
                      <span className='inline-flex'>
                      {passLength ? <FaCheck /> : <FcCancel />}
                        <p>At least 8 characters</p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default Register