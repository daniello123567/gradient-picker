"use client"
import React from 'react'
import { currentGradient, isError, isFromOrToOrVia } from '../overallstore';

function Color({ baseColor }:{baseColor:string}) {
  const {currentColorDirection} = isFromOrToOrVia();
  const {setError} = isError()
  const {handleFrom,handleTo,handleVia,gradient} = currentGradient();

  console.log(gradient,"GRADIENT");

  const colorClasses = [`bg-${baseColor}-50`,
    `bg-${baseColor}-100`, `bg-${baseColor}-200`, `bg-${baseColor}-300`,
    `bg-${baseColor}-400`, `bg-${baseColor}-500`, `bg-${baseColor}-600`,
    `bg-${baseColor}-700`, `bg-${baseColor}-800`, `bg-${baseColor}-900`,`bg-${baseColor}-950`
  ];

 const handleWhichFromorTo = (color:string)=>{
  if(!currentColorDirection){
     setError(true);
     setTimeout(()=>setError(false),2500)
  }

   if(currentColorDirection?.toLowerCase()=='from'){

    handleFrom(color.replace('bg','from'))
   }
   else if(currentColorDirection?.toLowerCase()=='to'){
    console.log(color + 'is set for'+ currentColorDirection);
      handleTo(color.replace('bg','to'))
   }
   else if(currentColorDirection?.toLowerCase()=='via'){
    console.log(color + 'is set for'+ currentColorDirection);
     handleVia(color.replace('bg','via'))
   }

 }
  return (
    <div>
      <p className='text-black mb-3'>{baseColor}</p>
      <div className='flex flex-wrap gap-2'>
      {colorClasses.reverse().map((colorClass, index) => (
        <div onClick={()=>handleWhichFromorTo(colorClass)} key={index} className={`w-12 cursor-pointer lg:w-[3.6em] rounded-lg h-12 ${colorClass}`}>

        </div>
      ))}
      </div>
    </div>
  );
}

export default Color
