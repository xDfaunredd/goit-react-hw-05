import { useEffect, useState } from "react";
import { fetchFilms } from "../../fetchData/fetchData";
import MoviesTitlesList from "../../components/MoviesTitlesList/MoviesTitlesList";
import s from "./HomePage.module.css";
const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilmsData = async () => {
      try {
        const data = await fetchFilms();
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilmsData();
  }, []);

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>

      <MoviesTitlesList films={films} />
    </div>
  );
};

export default HomePage;
