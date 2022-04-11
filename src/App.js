import EmojiCategory from "./components/EmojiCategory/EmojiCatergory";
import EmojiHub from "./components/EmojiHub/EmojiHub";
import EmojiView from "./components/EmojiView/EmojiView";
import EmojiHubSearch from "./components/EmojiHubSearch/EmojiHubSearch";

import "./App.css";

import { useCallback, useEffect, useState } from "react";
const initialCategories = [
  {
    id: 1,
    categoryName: "frequently used",
    iconName: "FrequentlyUsedIcon"
  },

  {
    id: 2,
    categoryName: "smileys and people",
    iconName: "SmileysAndPeopleIcon"
  },
  {
    id: 3,
    categoryName: "animals and nature",
    iconName: "AnimalsAndNatureIcon"
  },
  {
    id: 4,
    categoryName: "food and drink",
    iconName: "FoodAndDrinkIcon"
  },
  {
    id: 5,
    categoryName: "activities",
    iconName: "ActivitiesIcon"
  },
  {
    id: 6,
    categoryName: "travel and places",
    iconName: "TravelAndPlacesIcon"
  },
  {
    id: 7,
    categoryName: "objects",
    iconName: "ObjectsIcon"
  },
  {
    id: 8,
    categoryName: "symbols",
    iconName: "SymbolsIcon"
  },
  {
    id: 9,
    categoryName: "flags",
    iconName: "FlagsIcon"
  },
];
function App() {
  const [categories, setCategories] = useState([]);
  const [allEmoji, setAllEmoji] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLink, setActiveLink] = useState(
    categories[0]?.categoryName ?? "smileys and people"
  );
  const [clickedCategory, setClickedCategory] = useState(
    categories[0]?.categoryName ?? "smileys and people"
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

  const onSelectEmojiHandler = useCallback((convertedSelectedEmoji) => {
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
              { id: 10, categoryName: "Search Results", iconName: "SearchIcon" }
            ]}
            activeLink="Search Results"
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
