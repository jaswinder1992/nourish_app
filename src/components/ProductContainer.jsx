import React, { useState } from 'react'
import productsCoolection from '../SampleProductData';
import PopUp from './PopUp';
import Sampling  from './Sampling';
const ProductContainer = ({productsList}) => {
    const modalOpen = useState(false);
    const activeProduct = useState(null);
  return (
      <>
      <h1 className='h1   custom-section-header'>Our Products</h1>
        <hr className='section-seperator'/>
          <div className='cards-container'>
        {productsList.map(product=>{
            return(
              <Sampling product={product}/>  
              

                
                // <div className='custom-card'>
                //     <img src={product.imgUrl} className="custom-card-img" />
                //     <div className='custom-card-body'>
                //     <h2 className="cutom-card-title">
                //      {product.name}
                //     </h2>
                //     <p className='custom-card-desc'>
                //         {product.description}
                //     </p>
                //     <h3 className='custom-card-price'>
                //         {product.price}
                //     </h3>
                //     <button className=' btn btn-primary'>Know More</button>
                //     </div>
                // </div>   
                
            )
        })};

         
    </div>
    </>
    
  )
}

export default ProductContainer