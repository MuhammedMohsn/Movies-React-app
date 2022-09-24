import React,{Fragment} from 'react'
import Swipper from './Swiper'
function Header({movies}) {
  return (
    <Fragment>
    <Swipper movies={movies} />
    </Fragment>
  )
}

export default Header