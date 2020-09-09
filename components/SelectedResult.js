const SelectedResult = ({ data, back }) => {
  return (
    <div style={{

      alignItems: 'center'
    }}>

      <div className="jumbotron col-centered" style={{ alignItems: 'center' }}>
        <img src={data.Poster} alt="" />
        <h1 className="display-4">{data.Title}</h1>
        <p className="lead">{data.Plot}</p>
        <hr className="my-4" />
        <p><strong>Written By: </strong>{data.Writer}</p>
        <p><strong>Rated: </strong>{data.Rated}</p>
        <p><strong>Director: </strong>{data.Director}</p>
        <p><strong>Starring: </strong>{data.Actors}</p>
        <p className="lead">
          <a onClick={back} className="btn btn-primary btn-lg" role="button">Back to Search Results</a>
        </p>
      </div>
    </div>
  )
}

export default SelectedResult