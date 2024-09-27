import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchFilmsByIDForMovies } from "../../fetchData/fetchData";
import toast from "react-hot-toast";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const initialValues = {
    searchFilms: "",
  };

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      const query = searchParams.get("query");
      if (!query) {
        return;
      }
      setMovies([]);
      const data = await fetchFilmsByIDForMovies(query);
      if (data.results.length === 0) {
        return toast.error(`There are no ${query}`);
      }
      setMovies(data.results);
    };
    fetchMoviesByQuery();
  }, [searchParams]);

  const handleSubmit = (values, actions) => {
    if (values.searchFilms === "") {
      return toast.error("Enter some name of film");
    }
    setSearchParams({ query: values.searchFilms });
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field name="searchFilms" className={s.input} />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>

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
    </>
  );
};

export default MoviesPage;
