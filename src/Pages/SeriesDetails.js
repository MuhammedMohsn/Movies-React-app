import React, { Fragment, useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { getSeriesSimilar, getSeriesCasts, getSeriesVideos, getSeriesById } from '../api/api'
import styles from '../CSS_modules/singleSerie.module.css'
function SeriesDetails() {
  let navigate = useNavigate()
  let [singleSeries, setSingleSeries] = useState({})
  let [videos, setVideos] = useState([])
  let { id } = useParams();
  let [loading, setLoading] = useState(true)
  let [casts, setCasts] = useState([])
  let [similar, setSimilar] = useState([])
  useEffect(() => {
    getSeriesById(id).then((seriedata) => { setSingleSeries(seriedata); setLoading(false); });
    getSeriesVideos(id).then((videosdata) => { setVideos(videosdata) });
    getSeriesCasts(id).then((castsdata) => { setCasts(castsdata) })
    getSeriesSimilar(id).then((similarseriesdata) => { setSimilar(similarseriesdata) })
  }, [])

  useEffect(() => {
    getSeriesById(id).then((seriedata) => { setSingleSeries(seriedata) });
    getSeriesVideos(id).then((videosdata) => { setVideos(videosdata) });
    getSeriesCasts(id).then((castsdata) => { setCasts(castsdata) })
    getSeriesSimilar(id).then((similarseriesdata) => { setSimilar(similarseriesdata) })
  }, [id])

  let { name, poster_path, backdrop_path, overview, genres } = singleSeries
  if (loading) { return (<div>loading...........</div>) }
  return (
    <Fragment>
      <div className={`${styles.backdrop} mb-5`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`, backgroundAttachment: "fixed" }}>
        <Container className={styles.container}>
          <Row className="mb-4 h-100 w-100">
            <Col xs={6} md={6} className="h-100">
              <img className={`${styles.poster_img}`} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
            </Col>
            <Col xs={6} md={6} style={{ height: "100%", display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 style={{ fontSize: "4vw" }}>{name}</h1>
              <p className={`${styles.badges}  w-100`}>
                {genres.map((genre) => {
                  let { name } = genre
                  return (<div key={Math.random()} ><span pill bg="dark" className=" text-center "> {name}</span></div>)
                })}
              </p>
              <div className="w-100 " style={{ height: "fit-content", fontSize: "2vw" }}>{overview.slice(0, 200)}</div>
              <h1 style={{ color: "red", alignSelf: "flex-start" }}>Casts</h1>
              <Row >
                {casts.slice(0, 4).map((cast) => {
                  let { profile_path, name } = cast
                  return (
                    <Col xs={3} className="d-flex align-items-center flex-column" key={Math.random()}>
                      <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} className={`${styles.cast_img}`} alt={name} />
                      <div style={{ fontSize: "2vw" }} >{name}</div>
                    </Col>
                  )
                })} </Row></Col></Row></Container></div>

      <Container >
        <Row className={`${styles.videos_container}`} >
          {videos.slice(0, 4).map((video) => {
            let { name, key: k, id } = video
            return (<Col key={id} xs={12} className="mb-3">
              <iframe src={`https://www.youtube.com/embed/${k}`} width="100%" height="400px" title={`${name}`}></iframe>
            </Col>)
          })}
        </Row>
        <h2>Similar</h2>
        <Row>
          {similar.slice(0, 5).map((movie) => {
            let { poster_path, name, id } = movie
            return (<Col xs={3} key={Math.random()}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" onClick={() => { navigate(`/tv/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} className={`${styles.serie_img}`} />
                <Card.Body>
                  <Card.Link as={Link} to={`/tv/${id}`} className={styles.title}>{name}</Card.Link>
                </Card.Body>
              </Card>
            </Col>)
          })}</Row>
      </Container>
    </Fragment>
  )
}

export default SeriesDetails
