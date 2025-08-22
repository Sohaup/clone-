import React from 'react'
import logo from "../../assets/Parrot Security/parrot_logo.jpeg"
import { ChevronDown, Menu, X } from 'lucide-react'
import { useParrotNav } from '../../hooks/useParrotNav'

export default function ParrotNav() {
    const {isHidden , showList , setIsHidden , hideList  , isToggled , toggleUp , toggleDown} = useParrotNav();
    
    return (
        <nav className=' bg-transparent flex justify-between items-center responsive py-5' >
            <div className="flex flex-col lg:flex-row lg:justify-evenly  w-full lg:items-center  ">
            <div className="brand me-auto">
                <img src={logo} className='w-full h-full rounded-full' />
            </div>
            <div className={`links  overflow-hidden lg:overflow-visible lg:mx-auto ${isToggled ? 'h-60 lg:h-fit' : 'h-0'} transition-all duration-700` } >
                <ul>
                    <li><span>Community</span></li>
                    <li><span>Documentation</span></li>
                    <li className='relative'>
                        <span className='flex gap-1' onClick={showList}> 
                            Join us 
                            <ChevronDown />
                        </span>
                        <ul className='hidden-links absolute top-0 ' hidden={isHidden} onClick={hideList} >
                            <li><span className='links-hover'>careers</span></li>
                            <li><span className='links-hover'>team</span></li>
                            <li><span className='links-hover'>partners</span></li>
                            <li><span className='links-hover'>partner</span></li>
                        </ul>
                    </li>
                    <li><span>Blog</span></li>
                    <li><span>Donate</span></li>
                    <li><span>Store</span></li>
                </ul>
            </div>
            </div>
            <div className="btn self-start lg:self-center w-fit">
                <button className='nav-btn hidden lg:block'>Download</button>
                {
                    isToggled ?
                    <X onClick={toggleUp} className='lg:hidden' size={40}/>  :
                    <Menu onClick={toggleDown} className='lg:hidden' size={40} />
                }
            </div>
            
        </nav>
    )
}
