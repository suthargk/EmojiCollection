import "../App.css";
import { ReactComponent as Check } from "../search.svg";

export default function SearchEmoji({ className, type="text", id }) {
  return (
    <div className={className}>
      <label className="search-emoji-label" htmlFor={id}>
        <Check height="20px" width="20px" />
      <input
        id={id}
        className="search-emoji-input"
        type={type}
        placeholder="Search"
      />
      </label>
    </div>
  );
}
