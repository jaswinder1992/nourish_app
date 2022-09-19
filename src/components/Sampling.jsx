import React from 'react'
import {useState} from 'react';
import PopUp from './PopUp';

function Sampling({product}) {
    const [modal,setModalValue] = useState({isOpen:false,activeProduct:null});

  return (
    <div>
                {(modal.isOpen==true && modal.activeProduct != null &&<PopUp modalOpen={modal.isOpen} setModal={setModalValue} product={modal.activeProduct}/>)}

              
              <div className='custom-card'>
                    <img src={product.imgUrl} className="custom-card-img" />
                    <div className='custom-card-body'>
                    <h2 className="cutom-card-title">
                     {product.name}
                    </h2>
                    <p className='custom-card-desc'>
                        {product.description}
                    </p>
                    <h3 className='custom-card-price'>
                        {product.price}
                    </h3>
                    <button className=' btn btn-primary' onClick={()=>{
                       setModalValue((prev)=>{
                           return{
                            isOpen: true,
                            activeProduct: product 

                           }
                       })
                    }}>Know More</button>
                    </div>
                </div>    

    </div>
  )
}

export default Sampling