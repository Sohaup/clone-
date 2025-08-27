import React from "react" 
import { useParrotLanding } from "../../hooks/useParrotLanding"
import ParrotCard from "./ParrotCard";


export default function ParrotLanding() {
    const {typeRef} = useParrotLanding();    
    return (
        <div className=' py-8 '>
            <div className="title flex flex-col items-center text-white py-8 ">
                <h1 className="text-6xl flex flex-col gap-3 items-center">
                    <span className="text-frozen">ParrotSEC</span>
                    <span className="font-bold text-center">
                    The operating
                    system for 
                    </span>                  
                    <span ref={typeRef} className="font-bold text-frozen min-h-[80px]"/>
                </h1>
                <p className="text-gray-300">The ultimate framework for your Cyber Security operations</p>
            </div>
            <div className="btn-group flex flex-col gap-4 items-center py-8">
                <div className="first-group flex gap-3">
                    <button className="nav-btn">Download</button>
                     <button className="nav-btn transparent-btn">
                        Get started
                     </button>
                </div>
                <button className="nav-btn transparent-btn rounded-2xl lg:w-1/4">Released on 2020</button>
            </div>
            <ParrotCard/>           
        </div>
    )
}
