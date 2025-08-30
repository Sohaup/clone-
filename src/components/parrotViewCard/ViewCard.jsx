import React from 'react'
import desktopImg from "../../assets/parrot_imgs/desktop.png";

export default function ViewCard() {
  return (
    <div className='responsive bg-blue-950 rounded-xl  shadow  text-white flex flex-col items-center gap-5 pt-5'>
      <div className="title text-3xl font-bold">
        <h5>Hacking tools at your fingertips</h5>
      </div>
      <div className="texts text-gray-400 w-full lg:w-3/4">
        You can install your favorite tools on top of any Linux system, but it is time-consuming, prone to errors and hard to keep updated over time. Parrot gives you the convenience of a familiar Debian environment with all the tools you will ever need. We regularly update, test and pack them for you.
        Having a bunch of git clones thrown at your desktop is something of the past. We do the hard work, not you.
      </div>
      <div className="img">
        <img src={desktopImg} alt='desktop parrot img' className='w-full lg:w-[85%] block  mx-auto'/>
      </div>
    </div>
  )
}
