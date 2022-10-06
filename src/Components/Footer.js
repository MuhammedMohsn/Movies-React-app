import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../CSS_modules/Footer.module.css'
import { useNavigate } from 'react-router-dom'
function Footer() {
    let navigate = useNavigate()
    return (
        <Fragment>
            <div className={`${styles.footer}`}>
                <div className={`${styles.img_container} text-white fs-3`}> <img src={'../assets/tmovie.png'} /> tMovies</div>
                <Row className={`h-75 text-white`}>
                    <Col xs={12} md={4} lg={4} className={`${styles.col} d-flex justify-content-around align-items-center flex-column`}>
                        <div onClick={() => { navigate("/") }} className={` ${styles.footer_item}`}>Home</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>Contact us</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>Term of services</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>About us</div>
                    </Col>
                    <Col xs={12} md={4} lg={4} className={`${styles.col} d-flex justify-content-around align-items-center flex-column `}>

                        <div onClick={() => { navigate("/") }} className={` ${styles.footer_item}`}>Live</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>FAQ</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>Premium</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>Pravacy policy</div>
                    </Col>
                    <Col xs={12} md={4} lg={4} className={`${styles.col} d-flex justify-content-around align-items-center flex-column`}>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>
                            You must watch</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>Recent Release</div>
                        <div onClick={() => { navigate("/") }} className={`${styles.footer_item}`}>Top IMDB</div>

                    </Col>
                </Row>  </div></Fragment>
    )
}

export default Footer