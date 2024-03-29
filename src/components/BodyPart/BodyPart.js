import React from 'react'
import './BodyPart.css'
import gym from '../../Assets/gym.png'

export default function BodyPart({item, bodyPart, setBodyPart}) {
  return (
    <section id="bodyPart">
    <div className='bodypart-card' onClick={()=>{
      setBodyPart(item)
      console.log("clicked")
    }}>

    <img src={gym} alt='img'  />
    <h1>{item}</h1>
    
    </div>
    </section>
  )
}
