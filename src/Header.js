import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
function Header() {

   const[{ basket,user },dispatch] = useStateValue();
    
   function handleAuthentication(){
     if(user){
       auth.signOut();
     }

   }
   
    return (
        <div className='header'>
           <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="error"/>
           </Link>
            <div className="header_search">
                   <input className="header_searchInput" type="text" />  {/*Logo*/}
                   <SearchIcon className="header_searchIcon"/>
              </div>

              
            <div className="header_nav">
            
            <Link to={!user && '/Login'}>
              <div onClick={handleAuthentication}className='header_option'>
                 <span className='header_optionLineOne'>Hello {user ? user.email : 'Guest'}</span>
                 <span className='header_optionTwp'>{user? 'Sign Out' : 'Sign In'}</span>
              </div>
                </Link>


                <Link to='/orders'>
                <div className='header_option'>
                 <span className='header_optionLineOne'>Return</span>
                 <span className='header_optionTwp'>& Orders</span>
              </div>
                </Link>
           

              <div className='header_option'>
                 <span className='header_optionLineOne'>Your</span>
                 <span className='header_optionTwp'>Prime</span>
              </div>
                 
              <Link to="/checkout">
                <div className="header_optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
              </Link>
             
            </div>
        </div>          
    )
}

export default Header
