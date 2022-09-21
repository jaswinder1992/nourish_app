import React, { useState,useEffect } from 'react'
import { imageCollection } from '../imageCollection'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const Slider = ({ slideCollection }) => {
    const [curIndex, setCurIndex] = useState(0);
    const leftArrowClick = ()=>{
       const imageCollectionLen= slideCollection.length
        setCurIndex(curIndex==0?imageCollectionLen-1:curIndex-1);
    }
    const repeter = useEffect(()=>{
        setInterval(() => {
            console.log("google........"+curIndex);
            {setCurIndex(previous=>{
                return previous==slideCollection.length-1?0:previous+1;
            })}
        },15000 );
    },[])
    const rightArrowClick = ()=>{
        const imageCollectionLen= slideCollection.length
         setCurIndex(curIndex==imageCollectionLen-1?0:curIndex+1);
     }
    return (
        <div className='slider-container'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={leftArrowClick}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={rightArrowClick}/>
            {slideCollection.map((slide, index) => {
                return (
                  <div  className={index===curIndex?"slide-active":"slide"} style={{
                      width:"100%",
                      height:"100%"
                  }}key={"slide_".concat(index)}>
                     
                    {curIndex==index?<div  style={{
                        "backgroundImage": "url(".concat(slide.image).concat(")"),
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        flexDirection:"column"
                    }} >
                        <h1 className='text-warning slide-heading' style={{}}>
                            {slide.title}
                        </h1>
                        <p className='text-white slide-text'  style={{
                           
                            "color":"white",
                            "maxWidth":"75vw"

                        }}><strong> {slide.description}</strong></p>
                    </div>:null}
                    </div>
                    )
            })}
        </div>



    )
}

export default Slider