import MoviesTitlesItem from "../MoviesTitlesItem/MoviesTitlesItem";
import s from "./MoviesTitlesList.module.css";
const MoviesTitlesList = ({ films }) => {
  return (
    <ul className={s.list}>
      {films.map((item) => (
        <MoviesTitlesItem key={item.id} title={item.title} id={item.id} />
      ))}
    </ul>
  );
};

export default MoviesTitlesList;
