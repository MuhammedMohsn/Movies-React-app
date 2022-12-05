import React, { Fragment, useEffect, useState } from 'react'
import styles from '../CSS_modules/Movies.module.css'
import { Card, Row, Col } from 'react-bootstrap'
import { getUpComingMovies } from '../api/api'
import { Link, useNavigate } from 'react-router-dom'
function Movies() {
  let navigate = useNavigate()
  // define states
  let [movies, setMovies] = useState([])
  let [page, setPage] = useState(1)
  let [inputSearch, setInputSearch] = useState("")
  let [loading,setLoading] = useState(true)
  let loadMovies = () => { setPage(prevpage => { return prevpage + 1 }) }
  // getting movies after mounting the movies page and after changing the page
  useEffect(() => {
    getUpComingMovies(page).then((movies) =>{setLoading(false); setMovies(prevState => { return prevState.concat(movies) })})
  }, [page])
  if(loading) { return (<div>loading...........</div>)}
  return (
    <Fragment>
      <div className={`${styles.headerImg} mb-4`}>Movies</div>
      {/**search input */}
      <form action="" className={`${styles.search} d-flex align-items-center ms-5 mb-3`} >
        <input type="text" value={inputSearch} onChange={(e) => { setInputSearch(e.target.value) }} placeholder="Enter Keyword" className="h-100 w-75" />
        <button type="submit" className="h-100 w-25" style={{ fontSize: "1.3vw" }} >Search</button>
      </form>
      <Row className="ms-3">
        {/**displaying movies after writing anything or not */}
        {movies.filter((movie => { return movie.title.toLowerCase().includes(inputSearch.toLowerCase()) })).map((movie) => {
          let { title, poster_path, id } = movie
          return (
            <Col xs={4} md={3} lg={2} key={Math.random()} className={`${styles.col} mb-2`}>
              <Card style={{ width: '100%', height: "100%" }} >
                <Card.Img variant="top" onClick={() => { navigate(`/movies/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} className={`${styles.movie_img}`} />
                <Card.Body className="h-25">
                  <Card.Title as={Link} to={`/movies/${id}`} className={`${styles.movie_title}`}>{title}</Card.Title>
                </Card.Body></Card></Col>)
        })}</Row>
        {/**load more mutton */}
      <div className="mt-5 w-50 d-flex align-items-center justify-content-center" style={{ marginLeft: "auto", marginRight: "auto" }} >
        <button className={`${styles.loadMorBtn}`} onClick={() => { loadMovies() }}>Load More</button>
      </div>
    </Fragment>
  )
}

export default Movies