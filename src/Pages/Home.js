import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import styles from '../CSS_modules/Home.module.css'
import { getUpComingMovies, getTrendingMovies, getTopRatedMovies, getTrendingTv, getTopRatedTv } from '../api/api'
function Home({ movies, setMovies }) {
  let navigate = useNavigate()
  let [trendingMovies, setTrendingMovies] = useState([])
  let [topRatedMovies, setTopRatedMovies] = useState([])
  let [trendingTv, setTrendingTv] = useState([])
  let [topRatedTv, setTopRatedTv] = useState([])
  let [Id, setId] = useState(0)
  useEffect(() => {
    getTrendingMovies().then((data) => setTrendingMovies(data));
    getTopRatedMovies().then((data) => setTopRatedMovies(data));
    getTrendingTv().then((data) => setTrendingTv(data));
    getTopRatedTv().then((data) => setTopRatedTv(data))
  }, [trendingMovies,topRatedMovies,trendingMovies])
  useEffect(() => {
    getTrendingMovies().then((data) => setTrendingMovies(data));
    getTopRatedMovies().then((data) => setTopRatedMovies(data));
    getTrendingTv().then((data) => setTrendingTv(data));
    getTopRatedTv().then((data) => setTopRatedTv(data))
    getUpComingMovies().then((data) => setMovies(data))
  }, [Id])
  return (
    <Fragment>
      <Header movies={movies} />
      <div className={`${styles.container}`}>

        <div className={styles.sectionType}>
          <h4 className='w-25'>Trending Movies</h4>
          <Link to={`/movies`} className=" h-50" style={{ textDecoration: "none", width: "10%" }}>
            <button className={`${styles.viewMoreBtn} w-100 h-100`}  >View More</button>
          </Link>
        </div>
        <Row>
          {trendingMovies.slice(0, 6).map((movie) => {
            let { id, title, poster_path } = movie
            return (<Col key={id} xs={4} md={3} lg={2} className={`${styles.col} mb-3`}>
              <Card className="w-100 h-100">
                <Card.Img variant="top" className='h-75' style={{ cursor: "pointer" }} onClick={() => { setId(id); navigate(`/movies/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <Card.Body className='h-25'>
                  <Card.Text className='h-100 '>
                    <Link to={`/movies/${movie.id}`} className={`${styles.title}`}>{title}</Link>
                  </Card.Text>
                </Card.Body>
              </Card> </Col>)
          })}</Row>


        <div className={styles.sectionType}>
          <h4 className='w-25'>TopRated Movies</h4>
          <Link to={`/movies`} className=" h-50" style={{ textDecoration: "none", width: "10%" }}>
            <button className={`${styles.viewMoreBtn} w-100 h-100`} >View More</button>
          </Link>
        </div>
        <Row>

          {topRatedMovies.slice(0, 6).map((movie) => {
            let { id, title, poster_path } = movie
            return (<Col key={id} xs={4} md={3} lg={2} className={`${styles.col} mb-3`} >
              <Card className="w-100 h-100">
                <Card.Img variant="top" className='h-75' style={{ cursor: "pointer" }} onClick={() => { setId(id); navigate(`/movies/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <Card.Body className="h-25">
                  <Card.Text className="h-100">
                    <Link to={`/movies/${movie.id}`} className={`${styles.title}`}>{title}</Link>
                  </Card.Text>
                </Card.Body>
              </Card> </Col>)
          })}</Row>



        <div className={styles.sectionType}>
          <h4 className='w-25'>Trending TV</h4>
          <Link to={`/tv`} className=" h-50" style={{ textDecoration: "none", width: "10%" }}>
            <button className={`${styles.viewMoreBtn} w-100 h-100`} >View More</button>
          </Link>
        </div>
        <Row>
          {trendingTv.slice(0, 6).map((serie) => {
            let { id, name, poster_path } = serie
            return (<Col key={id} xs={4} md={3} lg={2} className={`${styles.col} mb-3`} >
              <Card className="w-100 h-100">
                <Card.Img variant="top" className='h-75' style={{ cursor: "pointer" }} onClick={() => { setId(id); navigate(`/tv/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <Card.Body className='h-25'>
                  <Card.Text className='h-100'>
                    <Link to={`/tv/${id}`} className={`${styles.title}`}>{name}</Link>
                  </Card.Text>
                </Card.Body>
              </Card> </Col>)
          })}</Row>

        <div className={styles.sectionType}>
          <h4 className='w-25'>TopRated tv</h4>
          <Link to={`/tv`} className=" h-50" style={{ textDecoration: "none", width: "10%" }}>
            <button className={`${styles.viewMoreBtn} w-100 h-100`} >View More</button>
          </Link>
        </div>
        <Row>
          {topRatedTv.slice(0, 6).map((serie) => {
            let { id, name, poster_path } = serie
            return (<Col key={id} xs={4} md={3} lg={2} className={`${styles.col} mb-3`}>
              <Card className="w-100 h-100">
                <Card.Img variant="top" className='h-75' style={{ cursor: "pointer" }} onClick={() => { setId(id); navigate(`/tv/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <Card.Body className='h-25'>
                  <Card.Text className='h-100'>
                    <Link to={`/movies/${id}`} className={`${styles.title}`}>{name}</Link>
                  </Card.Text>
                </Card.Body>
              </Card> </Col>)
          })}</Row>

      </div>

    </Fragment>
  )
}

export default React.memo(Home)