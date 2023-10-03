import MyImage from "../misc/MyImage";
import '../../styles/buttons.css';

const ImageButton = ({buttonImg, imgWidth, imgAlt, targetPath}) =>{
return(
    <a className="image-button" href={targetPath}>
        <img src={buttonImg} width={imgWidth} alt={imgAlt}/>
    </a>
    );
}

export default ImageButton;