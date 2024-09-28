import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies, location }) => {
  return (
    <div>
      {movies.length > 0 ? (
        <ul className={s.list}>
          {" "}
          {movies.map((item) => (
            <li key={item.id}>
              <Link to={`${item.id}`} state={location} className={s.link}>
                - {item.title} {item.release_date.slice(0, 4)}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ``
      )}
    </div>
  );
};

export default MovieList;
