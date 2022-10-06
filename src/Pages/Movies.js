import React, { Fragment, useEffect, useState } from 'react'
import styles from '../CSS_modules/Movies.module.css'
import { Card, Row, Col } from 'react-bootstrap'
import { getUpComingMovies } from '../api/api'
import { Link, useNavigate } from 'react-router-dom'
function Movies() {
  let navigate = useNavigate()
  let [movies, setMovies] = useState([])
  let [page, setPage] = useState(1)
  let [id, setId] = useState()
  let [inputSearch, setInputSearch] = useState("")
  let loadMovies = () => { setPage(prevpage => { return prevpage + 1 }) }

  useEffect(() => {
    getUpComingMovies(page).then((movies) => setMovies(prevState => { return prevState.concat(movies) }))
  }, [page, setMovies, id])

  return (
    <Fragment>
      <div className={`${styles.headerImg} mb-4`}>Movies</div>
      <form action="" className={`${styles.search} d-flex align-items-center ms-5 mb-3`} >
        <input type="text" value={inputSearch} onChange={(e) => { setInputSearch(e.target.value) }} placeholder="Enter Keyword" className="h-100 w-75" />
        <button type="submit" className="h-100 w-25" style={{ fontSize: "1.3vw" }} >Search</button>
      </form>
      <Row className="ms-3">
        {movies.filter((movie => { return movie.title.toLowerCase().includes(inputSearch.toLowerCase()) })).map((movie) => {
          let { title, poster_path, id } = movie
          return (
            <Col xs={4} md={3} lg={2} key={Math.random()} className={`${styles.col} mb-2`}>
              <Card style={{ width: '100%', height: "100%" }} >
                <Card.Img variant="top" onClick={() => { setId(`${id}`); navigate(`/movies/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} className={`${styles.movie_img}`} />
                <Card.Body className="h-25">
                  <Card.Title as={Link} to={`/movies/${id}`} className={`${styles.movie_title}`}>{title}</Card.Title>
                </Card.Body></Card></Col>)
        })}</Row>
      <div className="mt-5 w-50 d-flex align-items-center justify-content-center" style={{ marginLeft: "auto", marginRight: "auto" }} >
        <button className={`${styles.loadMorBtn}`} onClick={() => { loadMovies() }}>Load More</button>
      </div>
    </Fragment>
  )
}

export default React.memo(Movies)