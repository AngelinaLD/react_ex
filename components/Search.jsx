/** @format */

import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [search, setSearch] = useState("");

  const changedInput = (evt) => {
    setSearch(evt.target.value);
  };

  const handleEnter = (evt) => {
    if (evt.key === "Enter") {
      changedInput(search);
    }
  };

  return (
    <div className="d3">
      <input
        type="text"
        name="p"
        placeholder="Найти фильм..."
        value={search}
        onChange={changedInput}
        onKeyUp={handleEnter}
      />
      <button type="submit">
        <FontAwesomeIcon
          style={{ fontSize: "25px", color: "white" }}
          icon={faSearch}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}
