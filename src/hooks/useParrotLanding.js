import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function useParrotLanding() {
    const typeRef = useRef(null);
    useEffect(()=> {
        const typedText = new Typed(typeRef.current , {
        strings : ["hackers" , "security"] ,
        typeSpeed:50 ,
        loop:true ,
        showCursor:false
    } );
    return ()=>{
      typedText.destroy();
    }
    } , []);

    return {
        typeRef
    }
}