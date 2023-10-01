import '../../styles/buttons.css';

const FacadeButton = ({buttonText, targetPath}) =>{
    return(
        <a href="#" className="facade-button">
        <div className="facade-button-text">
          {buttonText}
        </div>
          </a>
    );
}

export default FacadeButton;