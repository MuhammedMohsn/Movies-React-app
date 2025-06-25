import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../CSS_modules/Swiper.module.css";
function Swipper({ comingMovies }) {
  let navigate = useNavigate();
  return (
    <Fragment>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {comingMovies.slice(0, 6).map((movie) => {
          let { id, title, overview, poster_path, backdrop_path } = movie;
          console.log(id);
          return (
            <SwiperSlide
              key={Math.random()}
              className={styles.swiper_slide}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
              }}
            >
              <div className={`${styles.text}`}>
                <div className="h-25 w-100"></div>
                <Container className="d-flex align-items-center  h-75">
                  <div className={styles.content}>
                    <h3
                      className="text-white fw-bolder"
                      style={{ fontSize: "3vw" }}
                    >
                      {title}
                    </h3>
                    <h5
                      className="text-white-50"
                      style={{ fontSize: "2vw", marginBottom: "20px" }}
                    >
                      {overview}
                    </h5>
                    <div>
                      <button
                        className={`${styles.watchBtn}`}
                        onClick={() => {
                          navigate(`/movies/${id}`);
                        }}
                      >
                        Watch Now
                      </button>
                    </div>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className={styles.swiperPoster}
                  />
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
}

export default Swipper;
