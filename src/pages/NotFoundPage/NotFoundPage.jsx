import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <h1>The page at the specified URL was not found.</h1>
      <p className={s.textContent}>
        This means the page might have been deleted or never existed. You’re
        seeing a 404 error, which indicates that the server can’t find the
        requested resource.
      </p>

      <Link to="/" className={s.backLink}>
        BACK TO THE HOME PAGE
      </Link>
    </div>
  );
};

export default NotFoundPage;
