import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TV from './Pages/Tv'
import Movie from '../src/Pages/Movie'
import SeriesDetails from '../src/Pages/SeriesDetails'
import Footer from './Components/Footer'
function App() {
  return (
    <Fragment>
    {/**configure Routes */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/TV/:id" element={<SeriesDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Fragment>
  );
}

export default App;
