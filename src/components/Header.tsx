import { Link, useLocation, useParams } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  return (
    <div className="tabs justify-end tabs-boxed">
      <Link to={"/"}>
        <a className={`tab ${location.pathname == "/" ? "tab-active" : ""}`}>
          Home
        </a>
      </Link>
      <Link to={"/Favorites"}>
        <a
          className={`tab ${
            location.pathname == "/Favorites" ? "tab-active" : ""
          }`}
        >
          Favorites
        </a>
      </Link>
    </div>
  );
};
