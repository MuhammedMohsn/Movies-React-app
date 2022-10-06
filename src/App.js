import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
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
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/TV" element={<TV series={series} setSeries={setSeries} />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/TV/:id" element={<SeriesDetails />} />
        </Routes>
        <Footer />
      </HashRouter>

    </Fragment>
  );

}

export default App;
