"use client"
import React, { useState } from 'react'
import localFont from 'next/font/local'
import Header from './Components/Header';
import CurrentColor from './Components/CurrentColor';
import ColorChooser from './Components/ColorChooser';
import Directionsetter from './Components/Directionsetter';
import { currentGradient, isError, isFromOrToOrVia } from './overallstore';
const font = localFont({src:'./fonts/outfit.woff2'});
function Page() {
  const [showDirectionSetter,setvisiblity] = useState<boolean>(false);
  const {currentColorDirection,setCurrentColorDirection} = isFromOrToOrVia();
  const [isViaDisbaled,setDisabilityVia] = useState<boolean>(false)
  const {gradient,setDirection,handleVia} = currentGradient();

  const {error} = isError()
  const buttons = [{content:currentColorDirection?.toLowerCase()==='from'?'From Color':'Select From Color',value:'From'},{content:currentColorDirection?.toLowerCase()==='via'?'Via Color':'Select Via Color',value:'Via'},{content:currentColorDirection?.toLowerCase()==='to'?'To Color':'Select To Color',value:'To'}];
  const handleFrom = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>&{target:{innerText:string}})=>{
    const innerTextOfBtn = event.target.innerText;
       if(innerTextOfBtn.includes('From')){
        setCurrentColorDirection('From')
       }else if(innerTextOfBtn.includes('Via')){
        setCurrentColorDirection('Via');
        setDisabilityVia(false)
       }else if(innerTextOfBtn.includes('To Color')){
        setCurrentColorDirection('To')
       }
  }
  const handleViaDisability = ()=>{
    setDisabilityVia(!isViaDisbaled);
    handleVia(null)

  }
console.log(isViaDisbaled,"via status");

  return (
         <div className={`${font.className}  bg-[#101112]   w-full min-h-screen bg-[url('https://arc.net/noise-light.png')]`}>
          <div className='w-full px-[1.5em] min-h-screen h-full pt-[1em] md:pt-[2em] bg-[#101112b6]'>
             <Header/>
             <div className='w-full text-white pb-[3em] px-[1.25em] pt-[2.5em] bg-[#27282962] rounded-[2.5em] mx-auto min-h-[36.25em]'>
              <p className='text-left  text-[2.25em] md:text-[3.875em] font-[600]'>Create Your <span className='text-[#914BF1]'>Gradients</span></p>
             <p className='lg:w-[40%]'>Combine Tailwind CSS colors to craft eye-catching text and background gradients, or choose from our pre-built gradients to design stunning visuals.</p>
            <div className='w-full flex-col lg:flex-row flex items-center justify-between'>
              <div className='lg:w-[25%] w-full items-center mt-[1em] relative p-[.5em] overflow-auto flex text-black  rounded h-[4em] bg-white'>
               <p>{gradient.Direction} {gradient.From} {gradient.Via} {gradient.To}</p>
              </div>
               <div className='lg:w-[70%] w-full relative px-[1em] flex justify-between items-center h-[4em] bg-white/50 backdrop-blur-md rounded mt-[1em]'>
             {error&&<div className='w-[12em] h-[4em] border border-red-500 rounded absolute top-[-3em] flex justify-center items-center bg-black'>
              choose a color direction!!
             </div>}
              <button onClick={()=>setvisiblity(!showDirectionSetter)}>select Direction</button>
               {buttons.map((btnContent:{content:string,value:string})=>{
                return <button title={btnContent.value=='Via'?'you can disable the via direction using the checkmark':''} className={`${btnContent.value.toLowerCase()===currentColorDirection?.toLowerCase()&&'text-black'} ${error&&'animate-error'} ${btnContent.value=='Via'&&isViaDisbaled&&'disabled opacity-[0.5] '} flex items-center p-[1em]`} onClick={handleFrom} key={btnContent.value}>{btnContent.content}{btnContent.value=='Via'&&<input checked={!isViaDisbaled} defaultChecked onClick={handleViaDisability} title='disable the via direction' type='checkbox'/>}</button>
               })}
             </div>
             </div>
             <div className='w-full relative z-[20] h-[25.5em]  items-center flex-col md:flex-row flex justify-between mt-[1em]'>
             <CurrentColor direction={gradient.Direction} viaColor={gradient.Via} fromColor={gradient.From} toColor={gradient.To}/>
             <ColorChooser/>
             {showDirectionSetter&& <Directionsetter close={setvisiblity} setDirection={setDirection}/>}

             </div>
             </div>
          </div>
         </div>

  )
}

export default Page
