import MyImage from "../misc/MyImage";

const ImageButton = () => ({buttonImg, imgWidth, imgAlt, targetPath}) =>{
return(
        <MyImage src={buttonImg} widthidth={imgWidth} alt={imgAlt} href={targetPath} onClick={ButtonAction}>
        </MyImage>
    );
}

export default ImageButton;