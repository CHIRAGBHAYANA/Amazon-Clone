import React , { useState } from 'react'
import './Login.css'
import { Link ,useHistory } from 'react-router-dom';
import { auth } from './firebase';
function Login() {
    const history = useHistory();
    const[ email,setemail] = useState('');
    const[ password,setpassword] = useState('');
   
    function handleEmail(event){
        setemail(event.target.value);
    }
    
    function handlePassword(event){
        setpassword(event.target.value)
    }

    function signin(event){
      event.preventDefault();
      // sigin register

      auth.signInWithEmailAndPassword(email,password).then((auth) => {
          if(auth){
              history.push('/')
          }
      })
      .catch(error => alert(error.message))  
    }
    
    function register(event){
        event.preventDefault();

        // firebase register
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
              console.log(auth);
              if(auth){
                  history.push('/')
              }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
           <Link to='/'>
          <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='error'/>
          </Link>

              <div className="login_container">
                 <h1>Sign-in</h1>

                 <form>
                    <h5>E-mail</h5>
                     <input type="text" value={email} onChange={handleEmail}></input>
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={handlePassword} />

                    <button className="login_signInButton" onClick={signin} type="submit">Sign In</button>
                 </form>

                 <p>By Signing-in you agree to Amazon's Fake Clone Condition of Use and Sale.Please see our Privacy Notice,
                 our Cookies Notice and our Interest-Based Ads Notice</p>

                 <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>

              </div>
          
        </div>
    )
} 

export default Login
