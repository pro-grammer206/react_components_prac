import React from 'react'
import {BsFillCaretLeftFill,BsFillCaretRightFill} from 'react-icons/bs'
import {useState} from 'react'

const ImageSlider = () => {
    const images = ['mount.jpg','snow.jpg','sea.jpg']
    const [count,setCount] = useState(0)
    const goRight = ()=>{
        console.log(count)
        if(count>=images.length-1 ){   
            setCount(0)
        }else{
            setCount(count=>count+1)
        }
    }
    const goLeft = () =>{
        console.log(count)
        if(count<=0){
            setCount(2)
        }else{
            setCount(count=>count-1)
        }

    }
    return (
        <>
            <h3 style={{userSelect:"none"}}>Image slider</h3>
            <img src={images[count]} alt="nature" />
            <div className='arrows'>
            <BsFillCaretLeftFill  className='slide' onClick={goLeft}/>
            <BsFillCaretRightFill className='slide' onClick={goRight}/>
            </div>
            
        </>
    )
}

export default ImageSlider;
