import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchFilmsByID } from "../../fetchData/fetchData";
import { FaArrowLeft } from "react-icons/fa";

import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const location = useLocation();

  const locateBack = location.state ?? "/movies";

  useEffect(() => {
    const fetchFilmsData = async () => {
      try {
        const data = await fetchFilmsByID(movieId);
        console.log(data);

        setFilmInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilmsData();
  }, [movieId]);

  return (
    <>
      <Link to={locateBack} className={s.backButton}>
        <FaArrowLeft /> BACK TO THE FILMS
      </Link>

      <div className={s.container}>
        <div className={s.mainContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${filmInfo.poster_path}`}
            alt={filmInfo.title}
          />
          <div className={s.childContainer}>
            <h2>
              {filmInfo.title} ({filmInfo.release_date?.slice(0, 4)})
            </h2>
            <p>User Score: {Math.round(filmInfo.vote_average * 10)}% </p>
            <h3>Overview</h3>
            <p>{filmInfo.overview}</p>
            <h4>Genres</h4>
            <ul className={s.list}>
              {filmInfo.genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.listLink}>
          <Link to="cast" className={s.link}>
            Cast
          </Link>
          <Link to="reviews" className={s.link}>
            Reviews
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

//state={location.state}

export default MovieDetailsPage;
