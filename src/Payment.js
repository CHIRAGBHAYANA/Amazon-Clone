import React ,{ useEffect, useState }from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom';
import { useElements ,useStripe, CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from  "react-currency-format"
import axios from './axios'
import { db } from "./firebase"
function Payment() {
    const[{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() => {
      //generate the special stripe secret which allows us to change a customer
      const getClientSecret = async () => {
        const response  = await axios({
            method: 'post',
            url: `/payments/create?total=${ getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
      }
      getClientSecret();
    },[basket])

    console.log('The Secret is >>> ',clientSecret)
    

    const handleSubmit = async(event) => {
       // fancy stripes
           event.preventDefault();
           setProcessing(true); 

           const payload = await stripe.confirmCardPayment(clientSecret,{ 
               payment_method: {
                   card: elements.getElement(CardElement)
                }
           }).then(({ paymentIntent }) => {
               //  paymentIntent = payment confirmation
              console.log("pi",paymentIntent)
          
               db
                 .collection('user')
                 .doc(user?.uid)
                 .collection('orders')
                 .doc(paymentIntent?.uid)
                 .set({
                     basket: basket,
                 })

                setSucceeded(true);   
                setError(null)
                setProcessing(false)
                dispatch({
                    type: 'EMPTY_BASET'
                })
                history.replace('/orders') 
           })

    } 

    function handleChange(event){
      // Listen for changes in the Card Element
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error? event.error.message : "");  
    }

    return (
        <div className='payment'>
          <div className='payment_container'>
             <h1>
                 Checkout (
                     <Link to="/checkout"> {basket?.length} items</Link>)
             </h1>

              <div className='payment_section'>
                 <div className="payment_title">
                    <h3>Shipping Address</h3>
                 </div>
                  <div className='payment_address'>
                     <p>{user?.email}</p>
                     <p>123 React Lane</p>
                     <p>Los Angela, CA</p>
                  </div>
              </div>
               
              <div className='payment_section'>
                   <div className='paymenr_title'>
                      <h3>Review items and delivery</h3>
                   </div>
                   <div className='payment_item'>
                         {basket.map(item => (
                             <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                 />
                         ))}
                   </div>
              </div>

              <div className='payment_section'>
                  <div className="payment_title">
                     <h3>Payment Method</h3>
                  </div>
                  <div className="payment_details">
                     <form onSubmit = {handleSubmit}>
                         <CardElement  onChange={handleChange}/>

                         <div className='payment_priceContainer'>
                             <CurrencyFormat 
                                 renderText={(value) => (
                                     <div>
                                     <h3>Order Total: {value}</h3>  
                                     </div>
                                 )}  
                                 decimalScale = {2}
                                 value={getBasketTotal(basket)}
                                 displayType={"text"}
                                 thousandSeparator = {true}
                                 prefix={"₹"}
                                 />
                                 <button disabled={processing || disabled || succeeded}>
                                     <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                                 </button>
                         </div>
                     </form>
                          
                  </div>    
              </div>
          </div>
        </div>
    )
}

export default Payment
