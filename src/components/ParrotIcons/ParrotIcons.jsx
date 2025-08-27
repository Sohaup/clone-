import React from 'react'
import bunnyIcon from "../../assets/parrot_imgs/bunny.svg";
import caidoIcon from "../../assets/parrot_imgs/caido.svg";
import hackIcon from "../../assets/parrot_imgs/hack.svg";

export default function ParrotIcons() {
  return (
    <div className='text-white flex justify-center py-6 '>
        <div className="flex flex-col items-center">
      <h4>In partnership with</h4>
      <div className="flex flex-col gap-5 items-center my-6">
            <div className="flex gap-40 justify-between">
                <img src={hackIcon} alt='hack the box icon' className='w-40'/>
                <img src={bunnyIcon} alt='bunny icon' className='w-40'/>
            </div>
            <img src={caidoIcon} alt='caido icon' className='w-20'/>
      </div>
      </div>
    </div>
  )
}
