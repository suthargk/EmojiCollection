import "../../App.css";

export default function SearchEmoji({ type="text", id }) {
  return (
    <div className="search-emoji">
      <label htmlFor={id}>
       <svg className="search-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </label>
      <input type={type} id={id} placeholder="Search" />
    </div>
  );
}
