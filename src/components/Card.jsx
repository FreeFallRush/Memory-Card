import "../styles/Card.css";

function Card({ name, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-img" />
      <p className="card-name">{name}</p>
    </div>
  );
}

export default Card;
