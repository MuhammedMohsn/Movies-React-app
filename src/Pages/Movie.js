import React, { Fragment, useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Badge, Card } from 'react-bootstrap'
import { getMovieById,getMovieVideos , getCasts,getSimilar } from '../api/api'

import styles from '../CSS_modules/Movie.module.css'
function Movie() {
  let navigate = useNavigate()
  let [singleMovie, setSingleMovie] = useState({})
  let [videos, setVideos] = useState([])
  let { id } = useParams();
  let [loading, setLoading] = useState(true)
  let [casts, setCasts] = useState([])
  let [similar, setSimilar] = useState([])
  useEffect(() => {
    getMovieById(id).then((movie) => { setSingleMovie(movie); setLoading(false); });
    getMovieVideos(id).then((videosdata) => { setVideos(videosdata);  });
    getCasts(id).then((castsdata) => { setCasts(castsdata);  })
    getSimilar(id).then((similarmoviedata) => { setSimilar(similarmoviedata)})

  }, [])
  useEffect(() => {
    getMovieById(id).then((movie) => { setSingleMovie(movie) });
    getMovieVideos(id).then((videosdata) => { setVideos(videosdata) });
    getCasts(id).then((castsdata) => { setCasts(castsdata) })
    getSimilar(id).then((similarmoviedata) => { setSimilar(similarmoviedata)})

  }, [id])
  let { title, poster_path, backdrop_path, overview, genres } = singleMovie
  if (loading) { return (<div>loading...........</div>) }
  return (
    <Fragment>

      <div className={`${styles.backdrop}`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})` }}></div>
      <Container className={`${styles.move}`}>
        <Row className={`${styles.row_height}  ${styles.move2}`}>
          <Col xs={8} md={5} className="h-100">
            <img className="w-100 h-75" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
          </Col>
          <Col xs={4} md={7} className="h-100">
            <h1 className={`${styles.header}`}>{title}</h1>
            <div className={`${styles.badges} mb-5 w-100`}>
              {genres.map((genre) => {
                let { id, name } = genre
                return (<Badge pill bg="dark" className=" text-center " style={{fontSize:"1.5vw",width:"25%"}}> {name}</Badge>)
              })}
            </div>
            <div className="w-100 fw-bolder  mb-4" style={{ height: "fit-content" }}>{overview}</div>
            <h1 style={{ color: "red" }}>Casts</h1>
            <Row > 
              {casts.slice(0, 4).map((cast) => {
                let { profile_path, name } = cast

                return (
                  <Col xs={3} className="d-flex align-items-center flex-column">
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} className="w-75 h-75" alt={name} />
                    <div>{name}</div>
                  </Col>
                )
              })}

            </Row> </Col></Row>
        <Row>
          {videos.slice(0, 4).map((video) => {
            let { name, id, key } = video
            return (<Col key={id} xs={12} className="mb-3">
              <iframe src={`https://www.youtube.com/embed/${key}`} width="100%" height="400px" title={`${name}`}></iframe>
            </Col>)
          })}
        </Row>
        <h2>Similar</h2>
        <Row>
          {similar.slice(0,5).map((movie) => {
            let { poster_path, title, id } = movie
            return (<Col xs={3} key={id}>
              <Card style={{ width: '100%' }}>
              <Card.Img variant="top" onClick={() => { navigate(`/movies/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} className={`${styles.movie_img}`} />
              <Card.Body>
                  <Card.Link as={Link} to={`/movies/${id}`} className={`${styles.title}`}>{title}</Card.Link>
                </Card.Body>
              </Card>
            </Col>)
          })}

        </Row>
      </Container>
    </Fragment>
  )
}

export default Movie