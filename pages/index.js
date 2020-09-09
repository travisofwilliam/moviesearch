import { useState } from 'react'
import Head from 'next/head'
const axios = require('axios')

import SearchResult from '../components/SearchResult'
import SelectedResult from '../components/SelectedResult'

const Index = () => {

  const [emptyMsg, setEmptyMsg] = useState('No movies searched')
  const [inputText, setInputText] = useState('')
  const [searchRes, setSearchRes] = useState([])
  const [singleResult, setSingleResult] = useState('')
  const [movieId, setMovieId] = useState('')

  const getMovies = (e) => {
    e.preventDefault()

    setMovieId('')

    axios.get(`http://www.omdbapi.com/?apikey=cda2a2d3&s=${inputText}`)
      .then(res => {
        if (res) {
          setSearchRes(res.data.Search)
          setEmptyMsg('No search results')
        }
      })
      .catch(err => {
        console.log(err)
      })

    setInputText('')
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const selectMovie = (id) => {
    axios.get(`http://www.omdbapi.com/?apikey=cda2a2d3&i=${id}`)
      .then(res => {
        setSingleResult(res.data)
        setMovieId(id)
      })
      .catch(err => console.log(err))
  }

  const back = (e) => {
    e.preventDefault()
    setMovieId('')
  }

  return (
    <div className='container text-center m-auto'>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/united/bootstrap.min.css" />
      </Head>
      <div>
        <h4>Movie Search</h4>
        <form>
          <input type="text" value={inputText} onChange={handleChange} className='mb-3' />
          <br />
          <button onClick={getMovies}>Search Movies</button>
        </form>

        <br />

        <div className='row justify-content-center'>
          {
            movieId.length >= 1 ? <SelectedResult back={back} data={singleResult} />
              :
              searchRes && searchRes.length >= 1 ?
                searchRes.map((result, idx) => {
                  return <SearchResult key={idx} result={result} selectMovie={selectMovie} />
                })
                : <div className='text-center col-lg-4'>{emptyMsg}</div>

          }
        </div>
      </div>
    </div>
  )
}

export default Index