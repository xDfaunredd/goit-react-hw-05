import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFilmsByIDForReviews } from "../../fetchData/fetchData";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchFilmsByIDForReviews(movieId);
        console.log(data.results);
        setReview(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {review.length > 0 ? (
        <ul>
          {" "}
          {review.map((item) => {
            const date = new Date(item.created_at);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return (
              <li key={item.id} className={s.item}>
                <h4 className={s.author}>Author: {item.author}</h4>
                <div className={s.container}>
                  <p>{item.content}</p>
                  <p>{`${year}-${
                    Number(month) < 10 ? "0" + month : month
                  }-${day}  ${hours}:${minutes}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.helpMessage}>We dont have any reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
