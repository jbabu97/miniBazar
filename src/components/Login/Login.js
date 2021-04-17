import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import GoogleIcon from '../../photos/google.png';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import Logo from '../../photos/sewingLogo.png';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

      const history = useHistory();
      const location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };

      const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { 
            name: displayName, 
            email: email
          }
          console.log(signedInUser);
          setLoggedInUser(signedInUser);
          history.replace(from);
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      };

      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
          sessionStorage.setItem('token', idToken)
          history.replace(from);
        }).catch(function(error) {
          const errorMessage = error.message;
          setLoggedInUser(errorMessage)
        });
        
      }
  

    return (
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
                <input type="submit" className='btn btn-info' value='Login' />
            </form>
            <p className='my-4'>or</p>
            <div>
                <div onClick={handleGoogleSignIn} className="btn btn-dark"><img className='google_icon' src={GoogleIcon} alt=""/> Continue With Google</div>
            </div>
        </div>
    );
};

export default Login;