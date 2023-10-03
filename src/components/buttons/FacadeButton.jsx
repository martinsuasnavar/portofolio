import '../../styles/buttons.css';

function ButtonAction(){
    const targetElement = document.getElementById("contents");
    targetElement.scrollIntoView({behavior: "smooth"});
}

const FacadeButton = ({buttonText, targetPath}) =>{
    return(
        <a href="#" className="facade-button" onClick={ButtonAction}>
        <div className="facade-button-text">
          {buttonText}
        </div>
          </a>
    );
}

export default FacadeButton;