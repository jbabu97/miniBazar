import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import "firebase/auth";
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import GoogleIcon from '../../photos/google.png';
import { UserContext } from '../../App';
import Logo from '../../photos/sewing_logo2.png';
import Navbar from '../Home/Navbar/Navbar';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut} from './LoginManager';


const Login = () => {

  initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

      const history = useHistory();
      const location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };

      const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true);
        })
    }
  
    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }
  
    const handleResponse = (res, redirect) =>{
      setLoggedInUser(res);
      if(redirect){
          history.replace(from);
      }
    }

    return (
        <div className='login'>
          <Navbar></Navbar>
          <div className='text-center login_form'>
            <img src={Logo} alt=""/>
            <h2 className='my-4'>Login</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' name='name' className='form-control' placeholder="Name" {...register({ required: true })} />
                {errors.name && <span style={{color: 'red'}}>This field is required</span>}
                <br/>
                <input type='email' name='email' className='form-control' placeholder='Email' {...register({ required: true })} />
                {errors.email && <span style={{color: 'red'}}>This field is required</span>}
                <br/>
                <input type="submit" className='custom_btn' value='Login' />
            </form>
            <div className='my-4'>
              <div className="d-flex justify-content-center">
                <div style={{borderTop: '1px solid gray', width:'48%'}}></div>
                <p style={{marginTop:'-13px'}}>or</p>
                <div style={{borderTop:'1px solid gray', width:'48%'}}></div>
              </div>
            </div>
            <div>
                <button onClick={googleSignIn} className="custom_btn"><img className='google_icon' src={GoogleIcon} alt=""/> Continue With Google</button>
            </div>
          </div>
        </div>
    );
};

export default Login;