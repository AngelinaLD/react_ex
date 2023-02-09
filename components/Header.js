/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav container flex between align-center">
          <a href="#" className="logo">
            FilmsOnline
            <FontAwesomeIcon
              style={{ fontSize: "30px", color: "white", marginLeft: "10px" }}
              icon={faFilm}
            ></FontAwesomeIcon>
          </a>
          <Search />
        </div>
      </nav>
    </header>
  );
}
