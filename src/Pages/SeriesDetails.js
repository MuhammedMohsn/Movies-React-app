import React, { Fragment, useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Badge, Card } from 'react-bootstrap'
import { getSeriesSimilar,getSeriesCasts,getSeriesVideos ,getSeriesById} from '../api/api'
import styles from '../CSS_modules/singleSerie.module.css'
function SeriesDetails({series,setSeries}) {
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
    getSeriesCasts(id).then((castsdata) => { setCasts(castsdata)})
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

    <div className={`${styles.backdrop}`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})` }}></div>
    <Container className={styles.move}>
      <Row>
        <Col xs={8} md={5}>
          <img className="w-100 h-75" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
        </Col>
        <Col xs={4} md={7}>
          <h1>{name}</h1>
          <div className={`${styles.badges} mb-5 w-100`}>
            {genres.map((genre) => {
              let {  name } = genre
              return (<h3 key={Math.random()} ><Badge pill bg="dark" className=" text-center "> {name}</Badge></h3>)
            })}
          </div>
          <div className="w-100 fw-bolder fs-5 mb-4" style={{ height: "fit-content" }}>{overview}</div>
          <h1 style={{ color: "red" }}>Casts</h1>
          <Row >
            {casts.slice(0, 4).map((cast) => {
              let { profile_path, name } = cast
              return (
                <Col xs={3} className="d-flex align-items-center flex-column" key={Math.random()}>
                  <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} className="w-75 h-75" alt={name} />
                  <div >{name}</div>
                </Col>
              )
            })} </Row>


        </Col>

      </Row>
      <Row>
        {videos.slice(0, 4).map((video) => {
          let { name,  key } = video
          return (<Col key={key} xs={12} className="mb-3">
            <iframe src={`https://www.youtube.com/embed/${key}`} width="100%" height="400px" title={`${name}`}></iframe>
          </Col>)
        })}
      </Row>
      <h2>Similar</h2>
      <Row>
        {similar.slice(0,5).map((movie) => {
          let { poster_path,name, id } = movie
          return (<Col xs={3} key={Math.random()}>
            <Card style={{ width: '100%' }}>
            <Card.Img variant="top" onClick={() => { navigate(`/tv/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} className={`${styles.serie_img}`} />
            <Card.Body>
                <Card.Link as={Link} to={`/tv/${id}`} className={styles.title}>{name}</Card.Link>
              </Card.Body>
            </Card>
          </Col>)
        })}

      </Row>
    </Container>
  </Fragment>
  )
}

export default SeriesDetails
