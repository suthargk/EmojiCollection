import EmojiCategory from "./components/EmojiCategory/EmojiCatergory";
import EmojiHub from "./components/EmojiHub/EmojiHub";
import EmojiView from "./components/EmojiView/EmojiView";
import EmojiHubSearchResult from "./components/EmojiHubSearchResult/EmojiHubSearchResult";
import {initialCategories, initialfrequentlyUsed} from './components/initialEmojiData'
import frequentlyUsedLRU from "./components/EmojiHub/frequentlyUsedLRU";

import "./App.css";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [allEmoji, setAllEmoji] = useState([]);
  const [frequentlyUsed, setFrequentlyUsed] = useState(JSON.parse(localStorage.getItem('frequently')) ?? initialfrequentlyUsed)
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLink, setActiveLink] = useState();
  const [clickedCategory, setClickedCategory] = useState();

  const [selectedEmoji, setSelectedEmoji] = useState({})

  useEffect(() => {
    fetch("https://emojihub.herokuapp.com/api/all")
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        const emojis = result.filter(res => !res.name.includes("type-"))
        setAllEmoji(emojis);
        setCategories(initialCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  const onSelectEmojiHandler = useCallback((convertedSelectedEmoji) => {
    frequentlyUsedLRU(frequentlyUsed, {...convertedSelectedEmoji})
      setSelectedEmoji({...convertedSelectedEmoji})
  }, [frequentlyUsed])

  const onClickScrollTo = useCallback((categoryItem) => {
    setClickedCategory(categoryItem);
  }, [])

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
            frequentlyUsed={frequentlyUsed}
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
          <EmojiHubSearchResult searchedEmojis={searchedEmojis} onSelectEmojiHandler={onSelectEmojiHandler}/>
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
