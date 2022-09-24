import React, { Fragment, useEffect, useState } from 'react'
import styles from '../CSS_modules/Series.module.css'
import { Card, Row, Col } from 'react-bootstrap'
import { getOnTheAirAeries } from '../api/api'
import { Link, useNavigate } from 'react-router-dom'
function Tv() {
  let navigate = useNavigate()
  let [page, setPage] = useState(1)
  let [series, setSeries] = useState([])
  let [id, setId] = useState()
  let [inputSearch, setInputSearch] = useState("")

  let loadSeries = () => { setPage(prevpage => { return prevpage + 1 }) }
  useEffect(() => {
    getOnTheAirAeries(page).then(seriesdata => setSeries(prevState => { return prevState.concat(seriesdata) }))
  }, [page, id])
  return (
    <Fragment>
      <div className={`${styles.headerImg} mb-4`}>Series</div>
      <form action="" className={`${styles.search} d-flex align-items-center ms-5 mb-3`} >
        <input type="text" value={inputSearch} onChange={(e) => { setInputSearch(e.target.value) }} placeholder="Enter Keyword" className="h-100 w-75" />
        <button type="submit" className="h-100 w-25" style={{ fontSize: "1.3vw" }} >Search</button>
      </form>
      <Row className="ms-3">
        {series.filter(serie => serie.name.includes(inputSearch)).map((serie) => {
          let { name, poster_path, id } = serie
          return (
            <Col xs={4} md={3} lg={2} key={Math.random()} className="mb-2">
              <Card style={{ width: '100%', height: "100%" }} >
                <Card.Img variant="top" onClick={() => { setId(`${id}`); navigate(`/tv/${id}`) }} src={`https://image.tmdb.org/t/p/w500${poster_path}`} className={`${styles.movie_img}`} />
                <Card.Body className='h-25'>
                  <Card.Title as={Link} to={`/tv/${id}`} className={`${styles.movie_title}`}>{name}</Card.Title>
                </Card.Body> </Card> </Col>)
        })}

      </Row>
      <div className="mt-5 w-50 d-flex align-items-center justify-content-center" style={{ marginLeft: "auto", marginRight: "auto" }} >
        <button className={`${styles.loadMorBtn}`} onClick={() => { loadSeries() }}>Load More</button>
      </div>
    </Fragment>)
}

export default React.memo(Tv)
