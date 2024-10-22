"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { currentGradient } from '../overallstore'
function CurrentColor({fromColor,toColor,viaColor,direction}:{viaColor?:string|null,direction:string,fromColor:string,toColor:string}) {
  const {gradient} = currentGradient();
  const text = `${gradient.Direction} ${gradient.From} ${gradient.Via} ${gradient.To}`;
  const [copied,setCopied] = useState<boolean>(false)
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text).then(()=>{
      setCopied(true)
    }).catch((err)=>{setCopied(false)});
    setTimeout(()=>{
      setCopied(false)
    },3000)
  }
  return (

    <div className={`w-full ${direction} ${fromColor} ${viaColor&&viaColor} ${toColor} h-[28em] relative md:w-[35%] rounded-[0.75em] md:h-full`}>
       <div onClick={handleCopy} className=' w-[2em] cursor-pointer h-[2em] top-[.8em] right-[.8em] absolute'>
                {!copied?<Image className='w-full h-full' alt='copy' width={500} height={500} src='/copy.svg'/>:
                <Image className='w-full h-full' alt='copy' width={500} height={500} src='/mark.svg'/>}
               </div>
                {copied&&<p className='absolute bg-black p-[1em] rounded shadow-lg top-[3em] right-[-2em] z-[300]'>Copied!</p>}
    </div>)
}

export default CurrentColor
