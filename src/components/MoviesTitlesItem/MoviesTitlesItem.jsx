import { Link, useLocation } from "react-router-dom";
import s from "./MoviesTitlesItem.module.css";

const MoviesTitlesItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={location} className={s.link}>
        - {title}
      </Link>
    </li>
  );
};

export default MoviesTitlesItem;
