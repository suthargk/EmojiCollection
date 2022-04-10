import EmojiCategory from "./components/EmojiCategory/EmojiCatergory";
import EmojiHub from "./components/EmojiHub/EmojiHub";
import EmojiView from "./components/EmojiView/EmojiView";
import EmojiHubSearch from "./components/EmojiHubSearch/EmojiHubSearch";

import "./App.css";

import { useCallback, useEffect, useState } from "react";
const initialCategories = [
  {
    id: 1,
    categoryName: "smileys and people",
  },
  {
    id: 2,
    categoryName: "animals and nature",
  },
  {
    id: 3,
    categoryName: "food and drink",
  },
  {
    id: 4,
    categoryName: "activities",
  },
  {
    id: 5,
    categoryName: "travel and places",
  },
  {
    id: 6,
    categoryName: "objects",
  },
  {
    id: 7,
    categoryName: "symbols",
  },
  {
    id: 8,
    categoryName: "flags",
  },
];
function App() {
  const [categories, setCategories] = useState([]);
  const [allEmoji, setAllEmoji] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLink, setActiveLink] = useState(
    categories[0] ?? "smileys and people"
  );
  const [clickedCategory, setClickedCategory] = useState(
    categories[0] ?? "smileys and people"
  );

  const [selectedEmoji, setSelectedEmoji] = useState({})

  useEffect(() => {
    fetch("https://emojihub.herokuapp.com/api/all")
      .then((response) => response.json())
      .then((result) => {
        // const data = result.filter((res) => res.name.includes("type-"));
        setAllEmoji(result);
        setCategories(initialCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  const onSelectEmojiHandler = useCallback( (convertedSelectedEmoji) => {
      setSelectedEmoji({...convertedSelectedEmoji})
  }, [])

  const onClickScrollTo = (categoryItem) => {
    setClickedCategory(categoryItem);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedEmojis = allEmoji.filter(
    (emoji) =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {!searchTerm && (
        <>
          <EmojiCategory
            activeLink={activeLink}
            categories={categories}
            onClickScrollTo={onClickScrollTo}
          />
          <EmojiHub
            allEmoji={allEmoji}
            categories={categories}
            setActiveLink={setActiveLink}
            clickedCategory={clickedCategory}
            onSelectEmojiHandler={onSelectEmojiHandler}
          />
        </>
      )}
      {searchTerm && (
        <>
          <EmojiCategory
            categories={[
              { id: 9, categoryName: "Frequently Used" },
              { id: 10, categoryName: "Search Result" },
            ]}
          />
          <EmojiHubSearch searchedEmojis={searchedEmojis} />
        </>
      )}
      <EmojiView
        handleSearch={handleSearch}
        value={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedEmoji={selectedEmoji}
      />
    </div>
  );
}

export default App;
