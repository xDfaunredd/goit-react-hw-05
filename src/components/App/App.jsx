import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

import "./App.css";

function App() {
  const buildLinkClass = ({ isActive }) => {
    return clsx("link", isActive && "active");
  };

  return (
    <>
      <header className="header">
        <div className="app-container">
          <nav className="navigation">
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </nav>
        </div>
      </header>

      <Suspense fallback={<p>Loading...</p>}>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
