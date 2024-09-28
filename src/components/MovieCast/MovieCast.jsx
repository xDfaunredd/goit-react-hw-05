import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFilmsByIDForCredits } from "../../fetchData/fetchData";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [credit, setCredit] = useState();
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await fetchFilmsByIDForCredits(movieId);
        setCredit(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCredits();
  }, [movieId]);

  return (
    <ul className={s.list}>
      {credit?.map((item) => (
        <li key={item.id} className={s.item}>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
            alt={item.name}
          />
          <div className={s.infoContainer}>
            <h4 className={s.personName}>{item.name}</h4>
            <p className={s.characterName}>Character: {item.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
