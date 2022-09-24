import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TV from './Pages/Tv'
import Movie from '../src/Pages/Movie'
import SeriesDetails from '../src/Pages/SeriesDetails'
import Footer from './Components/Footer'
function App() {
  let [movies, setMovies] = useState([])
  let [series, setSeries] = useState([])
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Movies-React-app/" element={<Home movies={movies} setMovies={setMovies} />} />
          <Route path="/Movies-React-app/movies" element={<Movies/>} />
          <Route path="/Movies-React-app/TV" element={<TV series={series} setSeries={setSeries} />} />
          <Route path="/Movies-React-app/movies/:id" element={<Movie />} />
          <Route path="/Movies-React-app/TV/:id" element={<SeriesDetails />} />
       </Routes>
       <Footer/>
    </BrowserRouter>

    </Fragment>
  );

}

export default App;
