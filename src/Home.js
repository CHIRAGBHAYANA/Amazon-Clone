import React from 'react';
import './Home.css';
import Product from "./Product"
function Home() {
    return (
        <div className="home">
           <div className="home_container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="error"/>
             
              <div className="home_row">
                   <Product 
                    id="1"
                    title='The lean startup' 
                    price={230} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating ={3}

                    />
                   <Product
                    id="2"
                    title='Kenwood Kmix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk,5 Litre Glass Bowl'
                    price={3000}
                    image="https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=KEKR008"
                    rating = {4}
                    />
              </div> 
              
              <div className="home_row">
                  <Product
                   id="3" 
                   title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                   price={42000}
                   rating = {3}
                   image= "https://images-na.ssl-images-amazon.com/images/I/61ZXTZMycXL._SL1000_.jpg"

                  />
                  <Product 
                      id="4"
                      title="Amazon Echo (3rd generation) | Smart speaker with Alexa,Charcoal Fabric"
                      price={3000}
                      rating = {5}
                      image = "https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"
                  />
                  <Product 
                      id="5"
                      title="New Apple iPad Pro(12.9-inch,Wi-Fi,128GB) - Silver (4th Generation)"
                      price={100000}
                      rating={4}
                      image = "https://www.bhphotovideo.com/images/images2500x2500/apple_my232ll_a_11_ipad_pro_early_1553824.jpg"
                  />
              </div> 

              <div className="home_row">
                  <Product 
                  id="6"
                  title="Samsung 49 curved Gaming Monitor"
                  price={40000}
                  rating = {5}
                  image= "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49g95tssnxza/Asset1.jpg?$product-details-jpg$"

                  />
              </div> 
              
            </div>
        </div>
    )
}

export default Home
