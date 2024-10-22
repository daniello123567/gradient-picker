"use client"
import React from 'react'

function Directionsetter({ setDirection, close }: { setDirection: any, close: any }) {
  const directions = ['To Top', 'To Top Right', 'To Right', 'To Bottom Right', 'To Bottom', 'To Bottom Left', 'To Left', 'To Top Left'];
  const determineDirection = (Textdirection: string) => {
    let gradientDirection;
    switch (Textdirection) {
      case directions[0]:
        gradientDirection = 'bg-gradient-to-t'
        break;
      case directions[1]:
        gradientDirection = 'bg-gradient-to-tr'
        break;
      case directions[2]:
        gradientDirection = 'bg-gradient-to-r'
        break;
      case directions[3]:
        gradientDirection = 'bg-gradient-to-br'
        break;
      case directions[4]:
        gradientDirection = 'bg-gradient-to-b'
        break;
      case directions[5]:
        gradientDirection = 'bg-gradient-to-bl'
        break;
      case directions[6]:
        gradientDirection = 'bg-gradient-to-l'
        break;
      case directions[7]:
        gradientDirection = 'bg-gradient-to-tl'
        break;

    }
    setDirection(gradientDirection);
    close(false)

  }

  return (
    <div className='w-[11em] z-[3000] flex flex-col gap-[.2em]  text-[1.3rem] text-black h-[15em] absolute left-[50%] bottom-0 bg-white rounded shadow-lg'>
      <div className='overflow-auto w-full relative'>
      <div onClick={()=>close(false)} className='absolute cursor-pointer right-0'>&#10005;</div>

      {directions.map((direction: string) => {
        return <p onClick={() => determineDirection(direction)} key={direction} className='cursor-pointer  hover:bg-gray-200 rounded bg-gray-100 px-[1em] py-[.7em]'>{direction}</p>
      })}
    </div>
    </div>
  )
}

export default Directionsetter
