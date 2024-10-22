import React from 'react'
import Color from './Color'

function ColorChooser() {
  const colors = ['red','orange','pink','rose','fuchsia','purple','violet','indigo','blue','sky','cyan','teal','emerald','green','lime','yellow','amber','stone','neutral','zinc','gray','slate']
  return (
    <div className='h-full overflow-auto mt-[1em] p-[1.5em] rounded-md w-full bg-white md:w-[62%]'>
     {colors.map((color:string)=>{
      return <Color key={color} baseColor={color}/>

     })}
    </div>
  )
}

export default ColorChooser
