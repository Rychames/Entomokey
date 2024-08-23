import "../styles/Card.css"

const Card = ({ imgSrc, text, textBtn }) => (
    <div className="card mt-5 mb-3" style={{ width: "13rem" }}>
        <div className="card-head position-relative">
            <img src={imgSrc} className="card-img-top" alt="imagem" />
        </div>
        <a href="#" className="btn btn-custom ">{textBtn}</a>
        <div className="card-body d-flex flex-column">
            <p className="card-text">{text}</p>
        </div>
    </div>

);

export default Card;
