import Button from "./Button";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
    setSearchText("");
  };

  return (
    <div className="w-1/2  m-auto flex place-content-center my-4 space-x-4">
      <div>
        <input
          type="text"
          placeholder="Search by tag..."
          onChange={(e) => setSearchText(e.target.value)}
          className=""
        />
      </div>

      <Button text={"Search"} onClick={handleSubmit} />
    </div>
  );
};

export default SearchBar;
