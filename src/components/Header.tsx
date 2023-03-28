import { Link, useLocation, useParams } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  return (
    <div className="tabs justify-end tabs-boxed">
      <Link to="/">
        <div className={`tab ${location.pathname === "/" ? "tab-active" : ""}`}>
          Home
        </div>
      </Link>
      <Link to="/Favorites">
        <div
          className={`tab ${
            location.pathname === "/Favorites" ? "tab-active" : ""
          }`}
        >
          Favorites
        </div>
      </Link>
    </div>
  );
};
