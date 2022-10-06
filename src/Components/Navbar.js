import React,{Fragment} from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {NavLink,Link} from 'react-router-dom'
import styles from '../CSS_modules/Navbar.module.css'
function NavBar() {
  return (
    <Fragment>
    <Navbar  className={`fs-3 fw-bolder text-white ${styles.navindex} w-100 `} style={{height:"100px"}}>
    <Container  >
      <Navbar.Brand as={Link} to="/" >
      <img src="../assets/tmovie.png"/> Awaan</Navbar.Brand>
      <Nav className={` d-flex align-items-center justify-content-end flex-row`}>
        <Nav.Link as={NavLink} to="/" className={styles.linknav}>Home</Nav.Link>
        <Nav.Link as={NavLink} to="/Movies" className={styles.linknav}>Movies</Nav.Link>
        <Nav.Link as={NavLink} to="/TV" className={styles.linknav}>TV</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </Fragment>
  )
}

export default NavBar