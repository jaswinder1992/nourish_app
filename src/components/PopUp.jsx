import React from 'react'

const PopUp = ({product, setModal}) => {
  return (
    <div className='Popup'>
     <div className='popup-container'>
         <h1>{product.name}</h1>
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