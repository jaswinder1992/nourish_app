import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import {imageCollection} from './imageCollection';
import ProductContainer from './components/ProductContainer'
import productsCoolection from './SampleProductData';
import PopUp from './components/PopUp'
import NewNav from './components/NewNav'

function App() {
  return (
  <div className='app'>
  {/* <Navbar/> */}
  <NewNav/>
  <Slider slideCollection={imageCollection}/>
  <ProductContainer productsList={productsCoolection}/>
  {/* <PopUp/> */}
  </div>
  )
}

export default App
