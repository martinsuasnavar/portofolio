import '../../styles/buttons.css';


//destruction props: {prop1, prop2}

const ContentButton = ({buttonText, pathTarget}) => {
    return (
        <a href={pathTarget} className="contents-button">
            {buttonText}
        </a>
    )
  
}

export default ContentButton;