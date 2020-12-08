import '../stylesheets/ImageCard.scss';

const ImageCard = (props) => {
    return (
        <div className="ImageCard">
            <img src={props.url} alt={props.description} />
        </div>
    );
};

export default ImageCard;