const SearchResult = ({ result, selectMovie }) => {
  return (
    <div onClick={(e) => {
      e.preventDefault()
      selectMovie(result.imdbID)
    }} className="card col-sm-3" style={{ width: '18rem' }}>
      <img className="card-img-top" src={result.Poster} alt="" />
      <div className="card-body">
        <h4>{result.Title}</h4>
      </div>
      <div className="card-body">
      </div>
    </div>
  )
}

export default SearchResult