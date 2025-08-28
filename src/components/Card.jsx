import "../styles/Card.css";

function Card({ name, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <p className="card-name">{name}</p>
    </div>
  );
}

export default Card;
