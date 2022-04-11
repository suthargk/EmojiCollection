import EmojiCategory from "./components/EmojiCategory/EmojiCatergory";
import EmojiHub from "./components/EmojiHub/EmojiHub";
import EmojiView from "./components/EmojiView/EmojiView";
import EmojiHubSearchResult from "./components/EmojiHubSearchResult/EmojiHubSearchResult";

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

const initialfrequentlyUsed = [
  {"name":"thumbs up sign ≊ thumbs up","category":"smileys and people","group":"body","htmlCode":["&#128077;"],"unicode":["U+1F44D"]},
  {"name":"grinning face","category":"smileys and people","group":"face positive","htmlCode":["&#128512;"],"unicode":["U+1F600"]},
  {"name":"face throwing a kiss","category":"smileys and people","group":"face positive","htmlCode":["&#128536;"],"unicode":["U+1F618"]},
  {"name":"smiling face with heart-shaped eyes ≊ smiling face with heart-eyes","category":"smileys and people","group":"face positive","htmlCode":["&#128525;"],"unicode":["U+1F60D"]},
  {"name":"smiling face with open mouth and tightly-closed eyes ≊ smiling face with open mouth ","category":"smileys and people","group":"face positive","htmlCode":["&#128518;"],"unicode":["U+1F606"]},
  {"name":"smiling face with open mouth and cold sweat ≊ smiling face with open mouth ","category":"smileys and people","group":"face positive","htmlCode":["&#128517;"],"unicode":["U+1F605"]},
  {"name":"face with stuck-out tongue and winking eye ≊ face with stuck-out tongue ","category":"smileys and people","group":"face neutral","htmlCode":["&#128540;"],"unicode":["U+1F61C"]},
  {"name":"face with tears of joy","category":"smileys and people","group":"face positive","htmlCode":["&#128514;"],"unicode":["U+1F602"]},
  {"name":"face screaming in fear","category":"smileys and people","group":"face negative","htmlCode":["&#128561;"],"unicode":["U+1F631"]},
  {"name":"pouting face","category":"smileys and people","group":"face negative","htmlCode":["&#128545;"],"unicode":["U+1F621"]},
  {"name":"see-no-evil monkey ≊ see-no-evil","category":"smileys and people","group":"monkey face","htmlCode":["&#128584;"],"unicode":["U+1F648"]},
  {"name":"pile of poo","category":"smileys and people","group":"creature face","htmlCode":["&#128169;"],"unicode":["U+1F4A9"]}
]
function App() {
  const [categories, setCategories] = useState([]);
  const [allEmoji, setAllEmoji] = useState([]);
  const [frequentlyUsed, setFrequentlyUsed] = useState(initialfrequentlyUsed)
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLink, setActiveLink] = useState();
  const [clickedCategory, setClickedCategory] = useState();

  const [selectedEmoji, setSelectedEmoji] = useState({})

  useEffect(() => {
    fetch("https://emojihub.herokuapp.com/api/all")
      .then((response) => response.json())
      .then((result) => {
        setAllEmoji(result);
        setCategories(initialCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  const onSelectEmojiHandler = useCallback((convertedSelectedEmoji) => {
      setSelectedEmoji({...convertedSelectedEmoji})
  }, [])

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
