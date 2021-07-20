import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider';
import BlogForm from './components/BlogForm';
import NumbersApi from './components/NumbersApi';

function App() {

  //Component States
  const [toggle,setToggle] = useState(false)
  const [imgToggle,setImgToggle] = useState(false)
  const [formToggle,setFormToggle] = useState(false)
  const [numToggle,setNumToggle] = useState(false)
  //toggle methods
  const toggleNav = (e)=>{setToggle(!toggle)}
  const toggleimg = (e)=>{setImgToggle(!imgToggle)}
  const toggleForm = (e)=>{setFormToggle(!formToggle)}
  const toggleNum = (e)=>{setNumToggle(!numToggle)}

  return (
    <div className='main'>
     {!toggle && <button className='btn' onClick={toggleNav}>|||</button>}
     {toggle && <Navbar  toggleNav={toggleNav}/>}

     <div id='app'>
     <section className='card'>
        <button className='btn-primary' onClick={toggleimg}>{imgToggle===false? 'Show slider':'Hide Slider'}</button>
        {imgToggle && <ImageSlider/>}
      </section> 
         <section className='card'>
          <button className='btn-primary' onClick={toggleForm}>{formToggle ? 'Hide Form':'Show Form'}</button>
          {formToggle && <BlogForm />}
        </section> 
        <section className='card'>
        <button className='btn-primary' onClick={toggleNum}>{numToggle ? 'Hide Api':'Show Api'}</button>
          {numToggle && <NumbersApi />}
        </section>
    </div>
      
    </div>
  );
}

export default App;
