import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../CSS_modules/Footer.module.css'
import { useNavigate } from 'react-router-dom'
function Footer() {
    let navigate = useNavigate()
    return (
        <Fragment>
            <div className={`${styles.footer} mt-4`}>
                <div className={`w-100 fs-2 fw-bolder h-25 d-flex align-items-center justify-content-center ${styles.footer_item}`}> <img src={`../assets/tmovie.png`} /> tMovies</div>
                <Row >
                    <Col xs={9} md={4} className={`mb-2 ${styles.col}`}>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100  mb-3 fw-bolder  d-flex align-items-center justify-content-center `}>Home</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100   mb-3 fw-bolder  d-flex align-items-center justify-content-center`}>Contact us</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100  mb-3 fw-bolder  d-flex align-items-center justify-content-center`}>Term of services</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100  mb-3 fw-bolder  d-flex align-items-center justify-content-center`}>About us</div>
                    </Col>
                    <Col xs={9} md={4} className={`mb-2 `}>

                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100  mb-3 fw-bolder  d-flex align-items-center justify-content-center `}>Live</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100   mb-3 fw-bolder  d-flex align-items-center justify-content-center`}>FAQ</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100  mb-3 fw-bolder  d-flex align-items-center justify-content-center`}>Premium</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100  mb-3 fw-bolder  d-flex align-items-center justify-content-center`}>Pravacy policy</div>
                    </Col>
                    <Col xs={9} md={4} className={`mb-2 `}>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100  mb-3 fw-bolder  d-flex align-items-center justify-content-center `}>
                            You must watch</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100   mb-3 fw-bolder  d-flex align-items-center justify-content-center`}>Recent Release</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item} h-25 w-100 mb-3 fw-bolder  d-flex align-items-center justify-content-center`}>Top IMDB</div>

                    </Col>
                </Row>  </div></Fragment>
    )
}

export default Footer