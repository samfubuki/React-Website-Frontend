import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
         <h1>Check out these EPIC Destinations!</h1>   
         <div className = "cards__container">
             <div className =  "cards__wrapper">
                 <ul className = "cards__items">
                   <CardItem 
                    src = "images/img-9.jpg"
                    text = "Explore the hidden waterfall deep inside the Amazon Jungle"
                    label = "Adventure"
                    path = "/services"
                   />  
                   <CardItem 
                    src = "images/img-2.jpg"
                    text = "The amazing island of Bali in a private cruise"
                    label = "Luxury"
                    path = "/services"
                   /> 
                 </ul>
                 <ul className = "cards__items">
                   <CardItem 
                    src = "images/img-3.jpg"
                    text = "Sail in the beautiful atlantic ocean and experience spectacular waters"
                    label = "Mystery"
                    path = "/services"
                   />  
                   <CardItem 
                    src = "images/img-4.jpg"
                    text = "Experience Football on top of Himalyan Mountains"
                    label = "Adventure"
                    path = "/services"
                   /> 
                   <CardItem 
                    src = "images/img-8.jpg"
                    text = "Ride through the Sahara Deserts on a camel tour"
                    label = "Adrenaline"
                    path = "/services"
                   /> 
                 </ul>
             </div>
         </div>
        </div>
    )
}

export default Cards
