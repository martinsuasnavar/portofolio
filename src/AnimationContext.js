import React, { createContext, useContext } from 'react'

const AnimationContext = createContext();

export function useAnimation(){
    return useContext(AnimationContext)
}

export function AnimationProvider({children}){
    function fullOpacityAfterAnimation(selector, time) {
        const box = document.querySelector(selector);
    
        // After a delay, set opacity to 1 with animation
        setTimeout(function () {
          box.style.opacity = 1;
        }, time);
      }

      return (
        <AnimationContext.Provider value={{ fullOpacityAfterAnimation }}>
          {children}
        </AnimationContext.Provider>
      );

}

export default AnimationContext;
