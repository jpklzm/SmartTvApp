import "./SerieCard.css";

function SerieCard(serie) {
  return (
    <div className="SerieCard">
      <img src={serie.serie.images?.landscape?.url} />
    </div>
  );
}

export default SerieCard;
