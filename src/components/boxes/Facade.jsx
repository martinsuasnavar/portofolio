import React, { useEffect, useState  } from 'react';
import MyImage from '../misc/MyImage';
import FacadeButton from '../buttons/FacadeButton';
import './Facade.css';

function fullOpacityAfterAnimation(selector, time){
    const box = document.querySelector(selector);

    //after a delay, hide element again with animation
    setTimeout(function(){
        box.style.opacity = 1;
    }, time);
}



const Facade = ({h1Text, h2Text}) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    useEffect(() => {
        fullOpacityAfterAnimation("#facade", 200);
        fullOpacityAfterAnimation(".facade-item", 1000);
        
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
   
    }, []);

  
        return (
    
            <div id="facade" style={{ backgroundPositionY: `${offset * -0.2}px` }}>
            
            <div className="facade-item">
            <MyImage src="/images/logo.png" width="140px" alt="Developer logo"/>
                <h1>{h1Text}</h1>
                
                <h2 className="facade-element-fade-in">{h2Text}</h2>
            </div>
            <aside>
                <nav>      
                </nav>
            </aside>
            <div className="facade-white-space"></div>
            <FacadeButton className="facade-button" buttonText={"read Below"}/>
        
            <script src="script.js"></script>
        </div>
          
        );
   
}


export default Facade;
