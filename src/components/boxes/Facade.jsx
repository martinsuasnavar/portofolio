import React, { useEffect } from 'react';
import MyImage from '../misc/MyImage';

function fullOpacityAfterAnimation(selector, time){
    const box = document.querySelector(selector);

    //after a delay, hide element again with animation
    setTimeout(function(){
        box.style.opacity = 1;
    }, time);
}

const Facade = () => {
    useEffect(() => {
        fullOpacityAfterAnimation("#facade", 200);
        fullOpacityAfterAnimation(".facade-item", 1000);
        fullOpacityAfterAnimation("#facade-about-me-button-placeholder", 1000);
    }, []);

  
        return (
    
            <div id="facade" >
            
            <div className="facade-item">
            <MyImage src="/images/logo.png" width="100px" alt="Developer logo"/>
                <h1>Martin Suasnavar</h1>
                
                <h2>Freelance Front-end Developer</h2>
            </div>
            <aside>
                <nav>      
                </nav>
            </aside>
            <div id="facade-about-me-button-placeholder"></div>
        
            <script src="script.js"></script>
        </div>
          
        );
   
}


export default Facade;
