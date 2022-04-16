import "../../App.css";
import { SearchIcon, CloseIcon } from "../../svg/";

export default function SearchEmoji({
  type = "text",
  id,
  value,
  handleSearch,
  setSearchTerm,
}) {

  return (
    <div className="search-emoji">
      <input
        type={type}
        id={id}
        placeholder="Search"
        // value={value}
        onChange={handleSearch}
      />
      <label htmlFor={id}>
        {/* <svg className="search-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
        {value ? (
          <button className="close-button" onClick={() => setSearchTerm("")}>
            <CloseIcon className="close-svg" />
          </button>
        ) : (
          <button className="search-button">
            <SearchIcon className="search-svg" />
          </button>
        )}
      </label>
    </div>
  );
}
