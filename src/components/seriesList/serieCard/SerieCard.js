import "./SerieCard.css";

function SerieCard({ serie }) {
  return (
    <div className="SerieCard">
      <img src={serie.images?.landscape?.url} alt={serie.title} />
    </div>
  );
}

export default SerieCard;
