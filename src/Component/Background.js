import React from 'react'
import background from './background.png'

export default function Background() {
  return (
    <div  >
      <img src={background} style={{position:'fixed',width:'100vw', height:'100vh', zIndex:'-1'}} alt=""/>
    </div>
  )
}
