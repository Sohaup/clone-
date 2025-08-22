import React, { useState } from 'react'

export function useParrotNav() {
    const [isHidden , setIsHidden] = useState(true);
    const [isToggled , setIsToggled] = useState(true);
    
    function showList() {
        setIsHidden(false);
        
    }

    function hideList() {
        setIsHidden(true)
    }

    function toggleDown() {
        setIsToggled(true);
    } 

    function toggleUp() {
        setIsToggled(false);
    }
   

    return {
        isHidden ,
        showList,
        setIsHidden ,
        hideList ,
        isToggled ,
        toggleUp ,
        toggleDown
    }
}