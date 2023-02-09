/** @format */

export default function Card(props) {
  const { Title, Year, imdbID, Poster } = props;
  return (
    <div id={"movie-" + imdbID} className="card">
      <div className="card-image">
        <img src={Poster} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title">{Title}</span>
        <p>
          <span>{Year}</span>
        </p>
      </div>
    </div>
  );
}
