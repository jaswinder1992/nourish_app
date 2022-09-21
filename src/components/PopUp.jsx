// import { Random } from '@faker-js/faker/modules/random';
import React from 'react'

const PopUp = ({product, setModal}) => {
  return (
    <div className='Popup'>
     <div className='popup-container'>
         <h1 >{product.name}</h1>
         <div className='popup-product-img-container'>
           <img src={product.imgUrl} alt={product.name} />
         </div>
         <div className='nutriants' key={"nutriant"}>
           <ul className='nutriant-list'>
             <li className='popup-list-title' key={"heading_"+Math.floor(Math.random() * 100)}><h2>NUTRINT LIST</h2></li>
             {product.nutriants.map(nutriant=>{
               return <li className='nutriant-li' key={"nuti_"+nutriant}><h4>{nutriant}</h4></li>
             })}
           </ul>
            <div className='popup-end-close-btn-container'>
              <button className='btn btn-danger btn-close-end' onClick={()=>{
                  setModal({
                    isOpen:false,
                    activeProduct:null
                 });
              }}>CLose </button>
            </div>
         </div>

         <div className='nutriants' key={"ingredients"}>
           <ul className='nutriant-list'>
             <li className='popup-list-title' key={"heading_"+Math.floor(Math.random() * 100)}><h2>INGREDIENT LIST</h2></li>
             {product.ingredients.map(ingredient=>{
               return <li className='ingredients-li' key={"nuti_"+ingredient}><h4>{ingredient}</h4></li>
             })}
           </ul>

         </div>
         <button className='btn-close btn-custom' onClick={()=>{
             setModal({
                isOpen:false,
                activeProduct:null
             });
         }}/>
         </div>   
        
     </div>
  )
}

export default PopUp