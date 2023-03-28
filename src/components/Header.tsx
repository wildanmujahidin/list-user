import { Link, useLocation, useParams } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  return (
    <div className="tabs justify-end tabs-boxed rounded-none">
      <Link to="/">
        <div className={`tab ${location.pathname === "/" ? "tab-active" : ""}`}>
          Home
        </div>
      </Link>
      <Link to="/favorites">
        <div
          className={`tab ${
            location.pathname === "/favorites" ? "tab-active" : ""
          }`}
        >
          Favorites
        </div>
      </Link>
    </div>
  );
};
